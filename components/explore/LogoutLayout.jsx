import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../Navigation/Logo';
import SearchBar from '../Navigation/SearchBar';
import Menu from '../Navigation/Menu';
import Navigation from '../Navigation/Navigation';
import Footer from './Footer';
import Widgets from '../Widget/Widgets';
import { useEffect } from 'react';
import useSticky from '@/hooks/useSticky';
import useSmallScreen from '@/hooks/useSmallScreen';
import DesktopStickyNavigation from '../Navigation/DesktopStickyNavigation';

const LogoutLayout = (props) => {
  const { setIsSticky } = useSticky();
  const { setIsSmallScreen } = useSmallScreen();
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
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setIsSticky(false);
    };
  }, [setIsSticky]);

  return (
    <div className='pageLayout flex flex-row overflow-auto '>
      <Sidebar />
      <div className='  main md:max-w-[513px] lg:max-w-xl 2xl:max-w-3xl overflow-y-auto scrollbar-thin scrollbar-thumb-widget-border scrollbar-track-transparent  flex-[2] flex-col h-full dark:bg-black bg-white md:border-x dark:border-search-text-color'>
        <header className='border-b dark:border-search-text-color w-full'>
          <div className='nav h-[85px] mmd:h-[100px] md:h-[118px] w-full bg-white dark:bg-black justify-start'>
            <div className=' md:hidden nav__header flex flex-row ms:justify-around py-3 items-center align-middle'>
              <Logo />
              <SearchBar />
              <Menu />
            </div>
            <Navigation  />
      <DesktopStickyNavigation />
          </div>
        </header>

        {props.children}

        <Footer />
      </div>
      <Widgets />
    </div>
  );
};

export default LogoutLayout;
