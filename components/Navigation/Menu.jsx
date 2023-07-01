import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

const Menu = () => {
  const loginModal = useLoginModal();
  const { currentUser } = useCurrentUser();
  const menuClickedHandler = () => {
    if (!currentUser){
      return loginModal.open();
    }

  };
  return (
    <div
      className='nav__menu cursor-pointer ms:w-[20px] ms:h-[20px] mmd:w-[30px] mmd:h-[30px] md:h-[50px] md:w-[50px] flex justify-center items-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light'
      onClick={menuClickedHandler}
    >
      <div className='md:hidden '>
        <svg
          viewBox='0 0 24 24'
          className=' dark:fill-white fill-black w-full h-full'
        >
          <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
        </svg>
      </div>

      <IoSettingsOutline className='hidden md:inline dark:stroke-white stroke-black w-full h-full md:w-[30px] md:h-[30px]' />
    </div>
  );
};

export default Menu;
