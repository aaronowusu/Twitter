import React from 'react';
import NavigationPanel from './NavigationPanel';

const MobileStickyNavigation = () => {
  return (
    <div
      className={`navigation text-search-text-color text-xs mmd:text-sm mlg:text-base flex flex-row justify-around px-[20px] dark:border-search-text-color fixed top-0  ms:w-full md:w-[511px] lg:w-[511px] xl:w-[511px] 2xl:w-[766px] ms:h-[50px] mmd:h-[56px] bg-white dark:bg-black mb-4 pt-4 z-10 border-b opacity-95`}
    >
      <NavigationPanel />
    </div>
  );
};

export default MobileStickyNavigation;
