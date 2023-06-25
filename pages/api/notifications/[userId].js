import prisma from '@/libs/prismadb';
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;
    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid userId');
    }
    const notifications = await prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hasNotification: false,
      },
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
