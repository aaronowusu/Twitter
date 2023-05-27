import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import { ClipLoader } from 'react-spinners';
import SpinnerModal from '@/components/Modals/SpinnerModal';
import UserHero from '@/components/Users/UserHero';
import UserBio from '@/components/Users/UserBio';
const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId);
  if (isLoading || !fetchedUser) {
    return (
      <div className='h-screen dark:text-white'>
        <SpinnerModal />
      </div>
    );
  }

  return (
    <div className='h-screen dark:text-white'>
      <div className='Header sticky z-10 top-2  py-2 px-4 h-[53px] w-full dark:bg-black flex items-center '>
        <div className='backArrow min-h-[32px] min-w-[52px] flex  item-center '>
          <ArrowBackIcon
            className='cursor-pointer'
            onClick={() => router.push('/home')}
          />
        </div>
        <div className='name flex-1 flex-col'>
          <h1 className='text-lg dark:text-white'>{fetchedUser?.name}</h1>
          <div className='text-sm dark:text-search-text-color font-bold'>
            0 Tweets
          </div>
        </div>
      </div>
      <div className='userHero px-4 py-2'>
      <UserHero userId={userId} />
      </div>
      <div className='userBio  py-2'>
      <UserBio userId={userId} />
      </div>


    </div>
  );
};

export default UserView;
