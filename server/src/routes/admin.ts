import { Router } from 'express';
import { prisma } from '../prisma/client.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

export const router = Router();

router.get('/revenue', requireAuth, requireRole('admin'), async (_req, res) => {
  const requests = await prisma.request.findMany({
    where: { status: { in: ['approved', 'received', 'review_enabled', 'reviewed'] } },
    include: { product: true }
  });
  const revenueCents = requests.reduce((sum, r) => sum + (r.product?.priceCents || 0), 0);
  res.json({ revenueCents });
});

router.get('/payouts', requireAuth, requireRole('admin'), async (_req, res) => {
  const bySeller = await prisma.product.groupBy({ by: ['sellerId'], _sum: { priceCents: true } });
  res.json(bySeller);
});

router.get('/activity', requireAuth, requireRole('admin'), async (_req, res) => {
  const logs = await prisma.activityLog.findMany({ orderBy: { createdAt: 'desc' }, take: 200 });
  res.json(logs);
});

router.patch('/product/:id/remove', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const updated = await prisma.product.update({ where: { id }, data: { active: false } });
  res.json(updated);
});

router.patch('/product/:id/reinstate', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const updated = await prisma.product.update({ where: { id }, data: { active: true } });
  res.json(updated);
});
