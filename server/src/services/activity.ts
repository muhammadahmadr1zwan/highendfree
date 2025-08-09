import { prisma } from '../prisma/client.js';

export async function logActivity(type: string, actorId: string | undefined, details?: string) {
  await prisma.activityLog.create({ data: { type, actorId: actorId || null, details } });
}
