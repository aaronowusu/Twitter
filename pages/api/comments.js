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
    try{
        const post = await prisma.post.findUnique({
            where: {
                id: postId,

            }
        });
        if (post?.userId){
            if (post.userId !== currentUser.id){
                await prisma.notification.create({
                    data: {
                        body: `${currentUser.name} replied to your post`,
                        userId: post.userId,
                    },
                });
                await prisma.user.update({
                    where: {
                        id: post.userId,
                    },
                    data: {
                        hasNotification: true,
                    },
                });
            }
        
        }

    }
    catch(err){
        console.log(err);
    }


    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
