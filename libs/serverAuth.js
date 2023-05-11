import { getSession } from 'next-auth/react';
import prisma from '@/libs/prismadb';
const serverAuth = async (req, res, ) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    throw new Error('Unauthorized');
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error('Unauthorized');
  }

  return { currentUser };
};

export default serverAuth;