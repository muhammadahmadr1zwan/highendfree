import { Router } from 'express';
import { prisma } from '../prisma/client.js';
import { requireAuth, requireRole } from '../middleware/auth.js';
import multer from 'multer';
import { uploadImage } from '../services/upload.js';
import { logActivity } from '../services/activity.js';

export const router = Router();

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

router.patch('/:id/approve', requireAuth, requireRole('seller', 'admin'), async (req, res) => {
  const id = req.params.id;
  const request = await prisma.request.findUnique({ where: { id }, include: { product: true } });
  if (!request) return res.status(404).json({ error: 'Not found' });
  if (req.user!.role !== 'admin' && request.product.sellerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });
  const updated = await prisma.request.update({ where: { id }, data: { status: 'approved' } });
  await logActivity('request_approved', req.user!.id, `Request ${id} approved`);
  res.json(updated);
});

router.patch('/:id/deny', requireAuth, requireRole('seller', 'admin'), async (req, res) => {
  const id = req.params.id;
  const request = await prisma.request.findUnique({ where: { id }, include: { product: true } });
  if (!request) return res.status(404).json({ error: 'Not found' });
  if (req.user!.role !== 'admin' && request.product.sellerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });
  const updated = await prisma.request.update({ where: { id }, data: { status: 'denied' } });
  await logActivity('request_denied', req.user!.id, `Request ${id} denied`);
  res.json(updated);
});

router.patch('/:id/mark-received', requireAuth, async (req, res) => {
  const id = req.params.id;
  const request = await prisma.request.findUnique({ where: { id } });
  if (!request) return res.status(404).json({ error: 'Not found' });
  if (request.buyerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });
  const updated = await prisma.request.update({ where: { id }, data: { status: 'received', reviewEnabledAt: new Date(Date.now() + 48 * 60 * 60 * 1000) } });
  await logActivity('request_received', req.user!.id, `Request ${id} marked received`);
  res.json(updated);
});

router.patch('/:id/mark-reviewed', requireAuth, upload.single('screenshot'), async (req, res) => {
  const id = req.params.id;
  const requestRecord = await prisma.request.findUnique({ where: { id } });
  if (!requestRecord) return res.status(404).json({ error: 'Not found' });
  if (requestRecord.buyerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });

  let screenshotUrl: string | undefined;
  const base64 = (req.body && (req.body.screenshotBase64 as string)) || undefined;
  if (req.file) {
    const uploaded = await uploadImage(req.file.buffer);
    screenshotUrl = uploaded.url;
  } else if (base64) {
    const buffer = Buffer.from(base64.replace(/^data:image\/[a-zA-Z]+;base64,/, ''), 'base64');
    const uploaded = await uploadImage(buffer);
    screenshotUrl = uploaded.url;
  }

  const updated = await prisma.request.update({ where: { id }, data: { status: 'reviewed', screenshotUrl } });
  await logActivity('request_reviewed', req.user!.id, `Request ${id} marked reviewed`);
  res.json(updated);
});

router.patch('/:id/refund', requireAuth, requireRole('seller', 'admin'), async (req, res) => {
  const id = req.params.id;
  const { paypalTransactionId } = req.body as { paypalTransactionId?: string };
  const request = await prisma.request.findUnique({ where: { id }, include: { product: true } });
  if (!request) return res.status(404).json({ error: 'Not found' });
  if (req.user!.role !== 'admin' && request.product.sellerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });
  const updated = await prisma.request.update({ where: { id }, data: { status: 'refunded', paypalTransactionId } });
  await logActivity('request_refunded', req.user!.id, `Request ${id} refunded`);
  res.json(updated);
});
