import { Router } from 'express';
import { prisma } from '../prisma/client.js';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { z } from 'zod';

export const router = Router();

router.get('/me', requireAuth, async (req, res) => {
  const me = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { id: true, email: true, role: true, status: true, name: true } });
  res.json(me);
});

const updateMeSchema = z.object({ name: z.string().optional() });
router.patch('/me', requireAuth, async (req, res) => {
  const parsed = updateMeSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const updated = await prisma.user.update({ where: { id: req.user!.id }, data: parsed.data, select: { id: true, email: true, role: true, status: true, name: true } });
  res.json(updated);
});

router.patch('/:id/status', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const { status } = req.body as { status: 'active' | 'banned' | 'suspended' };
  if (!['active', 'banned', 'suspended'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
  const updated = await prisma.user.update({ where: { id }, data: { status }, select: { id: true, email: true, role: true, status: true, name: true } });
  res.json(updated);
});

router.patch('/:id/role', requireAuth, requireRole('admin'), async (req, res) => {
  const { id } = req.params;
  const { role } = req.body as { role: 'buyer' | 'seller' | 'admin' };
  if (!['buyer', 'seller', 'admin'].includes(role)) return res.status(400).json({ error: 'Invalid role' });
  const updated = await prisma.user.update({ where: { id }, data: { role }, select: { id: true, email: true, role: true, status: true, name: true } });
  res.json(updated);
});
