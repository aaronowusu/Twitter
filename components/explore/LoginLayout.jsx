import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Menu from '../Navigation/Menu';
import SearchBar from '../Navigation/SearchBar';
import Widgets from '../Widget/Widgets';
import Navigation from '../Navigation/Navigation';
import { useEffect } from 'react';
import MobileBottomNavigation from '../Navigation/MobileBottomNavigation';
import { useRouter } from 'next/router';
import useSticky from '@/hooks/useSticky';
import useSmallScreen from '@/hooks/useSmallScreen';
import DesktopStickyNavigation from '../Navigation/DesktopStickyNavigation';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import useMobileDrawer from '@/hooks/useMobileDrawer';
import MobileDrawer from '../Navigation/MobileDrawer';

const LoginLayout = (props) => {
  const router = useRouter();
  const hideHeader =
    router.pathname === '/home' ||
    router.pathname === '/users/[userId]' ||
    router.pathname === '/posts/[postId]' ||
    router.pathname === '/notifications';
  const { setIsSticky } = useSticky();
  const { setIsSmallScreen } = useSmallScreen();
  const { currentUser } = useCurrentUser();
  const profileImage = currentUser?.profileImage;
  const mobileDrawer = useMobileDrawer();
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [setIsSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setIsSticky(false);
    };
  }, [setIsSticky]);

  return (
    <div className='pageLayout flex flex-row overflow-auto'>
      <Sidebar />
      <div className='main md:max-w-[513px] lg:max-w-xl 2xl:max-w-3xl overflow-y-auto  flex-[2] flex-col h-full dark:bg-black bg-white md:border-x dark:border-search-text-color'>
        {hideHeader ? null : (
          <header className='border-b dark:border-search-text-color w-full sticky top-0 bg-white dark:bg-black z-10'>
            <div className='nav h-[85px] mmd:h-[100px] md:h-[118px] w-full bg-white dark:bg-black justify-start'>
              <div className=' md:hidden nav__header flex flex-row ms:justify-around py-3 items-center align-middle'>
                <Avatar
                  alt='Profile Picture'
                  src={profileImage}
                  className=' cursor-pointer'
                  sx={{ width: 30, height: 30 }}
                  onClick={mobileDrawer.open}
                />
                <SearchBar />
                <Menu />
              </div>
              <Navigation />
              <DesktopStickyNavigation />
            </div>
          </header>
        )}

        {props.children}
        {mobileDrawer.isOpen && <MobileDrawer />}
        <MobileBottomNavigation />
      </div>

      <Widgets />
    </div>
  );
};
export default LoginLayout;
