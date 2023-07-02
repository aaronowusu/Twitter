import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import SpinnerModal from '@/components/Modals/SpinnerModal';
import UserHero from '@/components/Users/UserHero';
import UserBio from '@/components/Users/UserBio';
import NavigationPanel from '@/components/Users/Navigation/NavigationPanel';
import PostFeedFY from '@/components/Posts/PostFeedFY';
import { getSession } from 'next-auth/react';
import usePosts from '@/hooks/usePosts';
const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId);
  const {data:postsArray} = usePosts(userId);
  if (isLoading || !fetchedUser) {
    return (
      <div className='h-screen dark:text-white'>
        <SpinnerModal />
      </div>
    );
  }


  const amountOfPosts = postsArray?.length || 0;

  return (
    <div className='h-screen dark:text-white overflow-y-auto scrollbar-none scrollbar-track-transparent '>
      <div className='Header sticky z-10 top-0  py-2 px-4 h-[53px] w-full dark:bg-black bg-white flex items-center border-b border-search-bg-color-light dark:border-widget-border'>
        <div className='backArrow min-h-[32px] min-w-[52px] flex  item-center '>
          <ArrowBackIcon
            className='cursor-pointer'
            onClick={() => router.push('/home')}
          />
        </div>
        <div className='name flex-1 flex-col'>
          <h1 className='text-lg dark:text-white'>{fetchedUser?.name}</h1>
          <div className='text-sm dark:text-search-text-color font-bold'>
            {amountOfPosts} Tweets
          </div>
        </div>
      </div>
      <div className='userHero px-4 py-2'>
        <UserHero userId={userId} />
      </div>
      <div className='userBio  py-2'>
        <UserBio userId={userId} />
      </div>
      <div className='navigation'>
        <NavigationPanel />
      </div>
      <div className=''>
        <PostFeedFY userId={fetchedUser?.id} />
      </div>
    </div>
  );
};

export default UserView;

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
