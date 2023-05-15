import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useLoginModal from '@/hooks/useLoginModal';

const SettingsTab = () => {
  const loginModal = useLoginModal();
  const settingsClickHandler = () => {
    loginModal.open();
  };
  return (
    <div
      className='settings  md:w-[50px] md:h-[50px] lg:w-auto lg:h-auto flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'
      onClick={settingsClickHandler}
    >
      <div className='lg:pl-3'>
        <IoSettingsOutline className='dark:stroke-white stroke-black w-[30px] h-[30px]' />
      </div>
      <span className='dark:text-white hidden xl:inline pl-5  pr-8 py-3'>
        Settings
      </span>
    </div>
  );
};

export default SettingsTab;
