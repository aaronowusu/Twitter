import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineHashtag } from 'react-icons/hi';

const ExploreIcon = () => {
  return (
    <>
      <HiOutlineSearch className=' lg:hidden dark:stroke-white w-[26px] h-[26px]' />
      <HiOutlineHashtag className='hidden lg:block dark:stroke-white w-[26px] h-[26px]' />
    </>
  );
};

export default ExploreIcon;
