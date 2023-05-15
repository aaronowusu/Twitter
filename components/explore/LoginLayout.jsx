import React from 'react';
import Image from 'next/image';
import Logo from '../DefaultLogo';
import NavItem from '../Navigation/NavigationItem';
import Link from 'next/link';
import Sidebar from '../Sidebar/Sidebar';
import Menu from '../Navigation/Menu';
import SearchBar from '../Navigation/SearchBar';
import Widgets from '../Widget/Widgets';
import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';
import MobileNavigation from '../Navigation/MobileNavigation';
import { useRouter } from 'next/router';

const LoginLayout = (props) => {
  const router = useRouter();
  const hideHeader = router.pathname === '/home';

  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsSticky(scrollTop > 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='pageLayout flex flex-row overflow-auto '>
      <Sidebar />
      <div className='  main md:max-w-[513px] lg:max-w-xl 2xl:max-w-3xl overflow-y-auto flex-[2] flex-col h-full dark:bg-black bg-white md:border-x dark:border-search-text-color'>
        {hideHeader ? null : (
          <header className='border-b dark:border-search-text-color w-full'>
            <div className='nav h-[85px] mmd:h-[100px] md:h-[118px] w-full bg-white dark:bg-black justify-start'>
              <div className=' md:hidden nav__header flex flex-row ms:justify-around py-3 items-center align-middle'>
                <Logo />
                <SearchBar />
                <Menu />
              </div>
              <Navigation isSticky={isSticky} />
            </div>
          </header>
        )}

        <div className='ms:pb-12 md:pb-44 mx-3 md:mt-5'>{props.children}</div>
        <MobileNavigation />
      </div>
      <Widgets />
    </div>
  );
};

export default LoginLayout;
