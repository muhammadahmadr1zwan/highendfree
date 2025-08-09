import { Router } from 'express';
import { prisma } from '../prisma/client.js';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { z } from 'zod';

export const router = Router();

const createProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  country: z.string().min(1),
  priceCents: z.number().int().positive()
});

router.post('/', requireAuth, requireRole('seller', 'admin'), async (req, res) => {
  const parsed = createProductSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const product = await prisma.product.create({ data: { ...parsed.data, sellerId: req.user!.id } });
  res.status(201).json(product);
});

router.get('/', async (req, res) => {
  const { category, country } = req.query as { category?: string; country?: string };
  const products = await prisma.product.findMany({
    where: {
      active: true,
      ...(category ? { category } : {}),
      ...(country ? { country } : {})
    },
    orderBy: { createdAt: 'desc' }
  });
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ error: 'Not found' });
  if (req.user!.role !== 'admin' && product.sellerId !== req.user!.id) return res.status(403).json({ error: 'Forbidden' });
  const updated = await prisma.product.update({ where: { id: product.id }, data: { active: false } });
  res.json(updated);
});

// POST /products/:id/request (buyer creates a request)
router.post('/:id/request', requireAuth, requireRole('buyer'), async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } });
  if (!product || !product.active) return res.status(404).json({ error: 'Product not available' });
  const request = await prisma.request.create({ data: { productId: product.id, buyerId: req.user!.id } });
  res.status(201).json(request);
});
