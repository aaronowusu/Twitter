import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { useRouter } from 'next/router';

const ExploreTab = () => {
  const router = useRouter();
  const makeBold = router.pathname === '/explore/tabs/for-you';
  const exploreClickHandler = async () => {
    await router.push('/');
  };

  return (
    <div
      className='explore md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-auto xl:h-auto  flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light  cursor-pointer xl:pl-4 '
      onClick={exploreClickHandler}
    >
      <div className=''>
        <HiOutlineSearch className=' lg:hidden dark:stroke-white w-[26px] h-[26px]' />
        <HiOutlineHashtag className='hidden lg:block dark:stroke-white w-[26px] h-[26px]' />
      </div>
      <span
        className={`${
          makeBold && 'font-bold'
        } dark:text-white hidden xl:inline pl-3  pr-8 py-3`}
      >
        Explore
      </span>
    </div>
  );
};

export default ExploreTab;
