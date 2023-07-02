import React from 'react';
import { Divider } from '@mui/material';
import { getSession } from 'next-auth/react';
import NotificationsFeed from '@/components/NotificationsFeed';


const Notifications = () => {
  return (
    <>
      <div className='fixed  top-0  ms:w-full md:w-[511px] lg:w-[574px]  2xl:w-[766px] bg-white dark:bg-black mb-4  z-10 opacity-98 '>
        <div className=' h-[53px] px-4 pt-4 '>
          <h2 className='text-xl dark:text-white text-black font-bold'>
            Notifications
          </h2>
        </div>
        <Divider className='dark:bg-hover-grey' />
      </div>
      <main className='flex justify-start items-start  h-screen w-full overflow-y-auto scrollbar-none scrollbar-track-transparent '>
        <div className='mt-[53px] w-full'>
          <NotificationsFeed />
        </div>
      </main>
    </>
  );
};

export default Notifications;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
