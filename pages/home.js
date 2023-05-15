import React, { useContext } from 'react';
import Logo from '@/components/DefaultLogo';
import NavItem from '@/components/Navigation/NavigationItem';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';

const Home = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  
  return (
    <>
      <nav>
        <div className='top_section flex px-4 h-[53px] z-50 w-full justify-between items-center'>
          <div className='profile-picture basis-1/2 rounded-lg'>
            <button className='focus:outline-none hover:opacity-80 transition items-center'>
              <Avatar
                alt='Default Profile Picture'
                src=''
                sx={{ width: 32, height: 32 }}
              />
            </button>
          </div>
          <div className='logo '>
            <Logo />
          </div>
          <div className='basis-1/2'></div>
        </div>
        <div className='top_navigation flex justify-center items-center text-center h-[53px] border-b dark:border-search-text-color'>
          <div className='basis-1/2 px-4 text-search-text-color'>
            <NavItem href='/home' activeBorder='w-1/2 mx-auto '>
              For You
            </NavItem>
          </div>
          <div className='basis-1/2 px-4 text-search-text-color'>
            <NavItem href='#' activeBorder='w-1/2 mx-auto '>
              Following
            </NavItem>
          </div>
        </div>
      </nav>
      <main className='flex justify-center items-center  px-4'>
        <div className='basis-1/2'>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='w-[80px] h-[80px] rounded-full bg-search-text-color'></div>
            <div className='my-4'>
              <h1 className='text-white text-2xl font-bold'>
                You aren&apos;t following anyone yet
              </h1>
            </div>
            <div className='my-4'>
              <p className='text-search-text-color text-base'>
                When you do, their Tweets will show up here.
              </p>
            </div>
            <div className='my-4'>
              <button className='bg-twitter-blue rounded-full px-4 py-2 text-white text-base font-bold'>
                Let&apos;s go
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
