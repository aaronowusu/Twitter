import React from 'react';
import SearchBar from './SearchBar';
import Menu from './Menu';
import NavigationPanel from './NavigationPanel';

const DesktopStickyNavigation = () => {


  return (
    <div className='fixed ms:hidden md:block top-0  ms:w-full md:w-[511px] lg:w-[574px]  2xl:w-[766px] ms:h-[50px] mmd:h-[56px] bg-white dark:bg-black mb-4 pt-4 z-10 border-b opacity-98 '>
      <div className='flex flex-col'>
        <header className='border-b dark:border-search-text-color w-full'>
          <div className='nav h-[85px] mmd:h-[100px] md:h-[118px] w-full bg-white dark:bg-black justify-start'>
            <div className='nav__header flex flex-row ms:justify-around py-3 items-center align-middle'>
              <SearchBar />
              <Menu />
            </div>

            <div
              className={`navigation text-search-text-color text-xs mlg:text-base flex flex-row justify-around px-[20px] dark:border-search-text-color  `}
            >
              <NavigationPanel />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DesktopStickyNavigation;
