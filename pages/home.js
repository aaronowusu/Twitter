import React, { useState, useEffect } from 'react';
import Logo from '@/components/DefaultLogo';
import NavItem from '@/components/Navigation/NavigationItem';
import { Avatar, Divider } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';
import useMobileDrawer from '@/hooks/useMobileDrawer';
import Tweet from '@/components/Posts/Tweet';
import PostFeedF from '@/components/Posts/PostFeedF';
import PostFeedFY from '@/components/Posts/PostFeedFY';
import SpinnerModal from '@/components/Modals/SpinnerModal';
import TweetButton from '@/components/Posts/TweetButton';
import { useSession } from 'next-auth/react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  const { currentUser, LoggedIn } = useCurrentUser();
  const profileImage = currentUser?.profileImage;
  const mobileDrawer = useMobileDrawer();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const { status } = useSession();
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }

  }, [router,status]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!currentUser) {
    return <SpinnerModal />;
  }

  return (
    <>
      <div className='fixed  top-0  ms:w-full md:w-[511px] lg:w-[574px]  2xl:w-[766px] bg-white dark:bg-black mb-4  z-10 opacity-98 '>
        <nav>
          {!isSticky && (
            <div className='top_section md:hidden md:transform md:-translate-y-full md:transition-all md:duration-300 md:ease-in-out flex px-4 h-[53px] w-full justify-between items-center'>
              <div className='profile-picture basis-1/2 rounded-lg'>
                <button className='focus:outline-none hover:opacity-80 transition items-center'>
                  <Avatar
                    alt='Default Profile Picture'
                    src={profileImage}
                    sx={{ width: 32, height: 32 }}
                    onClick={mobileDrawer.open}
                  />
                </button>
              </div>
              <div className='logo '>
                <Logo />
              </div>
              <div className='basis-1/2'></div>
            </div>
          )}
          {
            <div className=' hidden md:block h-[53px] px-4 pt-4'>
              <h2 className='text-xl dark:text-white text-black font-bold'>
                Home
              </h2>
            </div>
          }
          <div className='top_navigation flex justify-center items-center text-center h-[50px] dark:border-search-text-color border-b '>
            <div className='basis-1/2 px-4 h-full text-search-text-color dark:hover:bg-hover-grey hover:bg-search-bg-color-light opacity-95'>
              <NavItem
                href='/home'
                activeBorder='w-1/2 mx-auto '
                activeTab={activeTab}
                currentTab='foryou'
                onClick={() => handleTabChange('foryou')}
              >
                For you
              </NavItem>
            </div>
            <div className='basis-1/2 px-4 text-search-text-color  dark:hover:bg-hover-grey hover:bg-search-bg-color-light h-full opacity-95'>
              <NavItem
                href='/home'
                activeBorder='w-1/2 mx-auto '
                activeTab={activeTab}
                currentTab='following'
                onClick={() => handleTabChange('following')}
              >
                Following
              </NavItem>
            </div>
          </div>
        </nav>
      </div>
      <main className='flex justify-start items-start  h-screen w-full overflow-y-auto scrollbar-thin dark:scrollbar-thumb-widget-border   scrollbar-track-transparent '>
        <div
          className={` mt-[102px] w-full ${
            activeTab === 'foryou' ? 'block' : 'hidden'
          } `}
        >
          <div className='for you ms:hidden md:block py-3  px-4'>
            <Tweet />
          </div>
          <Divider className='dark:bg-widget-border ' />
          <PostFeedFY userId={currentUser?.id} />
        </div>
        <div
          className={` mt-[102px] w-full  ${
            activeTab === 'following' ? 'block' : 'hidden'
          }`}
        >
          <div className='following ms:hidden md:block py-3  px-4 '>
            <Tweet />
          </div>
          <Divider className='dark:bg-widget-border' />
          <PostFeedF userId={currentUser?.id} />
        </div>

        <TweetButton />
      </main>
    </>
  );
};

export default Home;
