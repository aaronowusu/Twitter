import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req, res) {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
      return res.status(405).end();
      
    }
    try{
        const {userId} = req.body;
        const {currentUser} = await serverAuth(req, res);

        if (!userId || typeof userId !== 'string') {
            throw new Error('Invalid user ID');
          }

          const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        });

        if (!user) {
            throw new Error('User not found');
          }
        
        let updatedFollowingIds = [...(user.followingIds || [])];

        if (req.method === 'POST') {
            updatedFollowingIds.push(userId);
          }

        if (req.method === 'DELETE') {
            updatedFollowingIds = updatedFollowingIds.filter((id) => id !== userId);
          }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id,
            },
            data: {
                followingIds: updatedFollowingIds,
            },
        });

        return res.status(200).json({updatedUser});
    }
    catch(err){
        console.log(err);
        return res.status(400).end();

    }
    }