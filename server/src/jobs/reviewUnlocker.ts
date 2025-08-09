import cron from 'node-cron';
import { prisma } from '../prisma/client.js';

// Every hour, enable review for requests older than 48h that are approved or received
cron.schedule('0 * * * *', async () => {
  const now = new Date();
  const fortyEightHoursAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);
  await prisma.request.updateMany({
    where: {
      status: { in: ['approved', 'received'] },
      OR: [
        { reviewEnabledAt: null, createdAt: { lt: fortyEightHoursAgo } },
        { reviewEnabledAt: { lt: now } }
      ]
    },
    data: { status: 'review_enabled' }
  });
});
