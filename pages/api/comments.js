import prisma from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    const { body } = req.body;
    const { postId } = req.query;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid postId');
    }

    const comment = await prisma.comment.create({
      data: {
        body,
        userId: currentUser.id,
        postId,
      },
    });

    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
