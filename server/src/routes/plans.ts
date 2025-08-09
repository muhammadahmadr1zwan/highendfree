import { Router } from 'express';
import { prisma } from '../prisma/client.js';
import { requireAuth } from '../middleware/auth.js';
import { z } from 'zod';

export const router = Router();

router.get('/', async (_req, res) => {
  const plans = await prisma.plan.findMany({ orderBy: { priceCents: 'asc' } });
  res.json(plans);
});

const subscribeSchema = z.object({ planId: z.string().uuid() });
router.post('/subscribe', requireAuth, async (req, res) => {
  const parsed = subscribeSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { planId } = parsed.data;
  const plan = await prisma.plan.findUnique({ where: { id: planId } });
  if (!plan) return res.status(404).json({ error: 'Plan not found' });
  const subscription = await prisma.subscription.create({ data: { userId: req.user!.id, planId } });
  res.status(201).json(subscription);
});
