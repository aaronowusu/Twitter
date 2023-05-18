import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

const SettingsTab = () => {
  const loginModal = useLoginModal();
  const { currentUser } = useCurrentUser();
  const settingsClickHandler = () => {
    loginModal.open();
  };
  if (currentUser) {
    return null;
  }
  return (
    <div
      className='settings  md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-auto xl:h-auto flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer  lg:pl-4 '
      onClick={settingsClickHandler}
    >
      <div className=''>
        <IoSettingsOutline className='dark:stroke-white stroke-black w-[26px] h-[26px]' />
      </div>
      <span className='dark:text-white hidden xl:inline pl-3  pr-8 py-3'>
        Settings
      </span>
    </div>
  );
};

export default SettingsTab;
