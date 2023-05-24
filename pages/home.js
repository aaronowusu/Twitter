import React, { useState, useEffect } from 'react';
import Logo from '@/components/DefaultLogo';
import NavItem from '@/components/Navigation/NavigationItem';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';
import useMobileDrawer from '@/hooks/useMobileDrawer';

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
      <main className='flex justify-center items-center h-screen bg-twitter-blue px-4 '>
        <div className={`${activeTab === 'foryou' ? 'block' : 'hidden'} `}>
          <div className=''>
            <svg viewBox='0 0 24 24' className='w-6 h-6 mr-1'>
              <g>
                <path
                  fill='fill-white'
                  d='M12.5,2.5c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S18,2.5,12.5,2.5z M12.5,21.5c-4.7,0-8.5-3.8-8.5-8.5
                      S7.8,4.5,12.5,4.5S21,8.3,21,13S17.2,21.5,12.5,21.5z'
                ></path>
                <path
                  fill='fill-white'
                  d='M12.5,7.5c-0.8,0-1.5,0.7-1.5,1.5v5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-5C14,8.2,13.3,7.5,12.5,7.5z'
                ></path>
                <circle fill='fill-white' cx='12.5' cy='16.5' r='1.5'></circle>
              </g>
            </svg>
            <span className='text-sm'>For You</span>
          </div>
        </div>
        <div className={`${activeTab === 'following' ? 'block' : 'hidden'}`}>
          following
        </div>
      </main>
    </>
  );
};

export default Home;
