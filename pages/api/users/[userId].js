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

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return res.status(200).json({
      ...existingUser,
      followersCount,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
}
