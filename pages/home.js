import React, { useState, useEffect } from 'react';
import Logo from '@/components/DefaultLogo';
import NavItem from '@/components/Navigation/NavigationItem';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';
import useMobileDrawer from '@/hooks/useMobileDrawer';
import Form from '@/components/Posts/Form';

const Home = () => {
  const [activeTab, setActiveTab] = useState('foryou');
  const { currentUser, LoggedIn } = useCurrentUser();
  const profileImage = currentUser?.profileImage;
  const mobileDrawer = useMobileDrawer();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsSticky(scrollTop > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!currentUser && !LoggedIn) {
    router.replace('/explore/tabs/for-you');
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
      <main className='flex justify-center items-start  h-screen  px-4 '>
        <div className={` mt-[102px] ${activeTab === 'foryou' ? 'block' : 'hidden'} `}>
          <div className='for you '>
          <Form/>
        
            <span className='text-sm text-white '>For You</span>
          </div>
        </div>
        <div className={` mt-[102px] ${activeTab === 'following' ? 'block' : 'hidden'}`}>
        <Form/>
        <span className='text-sm text-white '>Following</span>
        </div>
      </main>
    </>
  );
};

export default Home;
