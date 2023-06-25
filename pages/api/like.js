import prisma from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const {postId} = req.body;
    const {currentUser} = await serverAuth(req, res);

    if (!postId || typeof postId !== 'string') {
        throw new Error('Invalid post ID');
        }

    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        }
    });

    if (!post) {
        throw new Error('Post not found');
        }

    let updatedLikedIds = [...(post.likedIds || [])];

    if (req.method === 'POST') {
        updatedLikedIds.push(currentUser.id);
        }

    if (req.method === 'DELETE') {
        updatedLikedIds = updatedLikedIds.filter((id) => id !== currentUser.id);
        }

    const updatedPost = await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            likedIds: updatedLikedIds,
        },
    });

    return res.status(200).json({updatedPost});
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
