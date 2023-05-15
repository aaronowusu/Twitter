import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

const LogoutTab = (props) => {
  const { currentUser } = useCurrentUser();

  const logoutClickHandler = () => {
    signOut();
  };

  if (!currentUser) {
    return null; // Don't render anything if the user is not signed in
  }

  return (
    <div
      className='settings  md:w-[50px] md:h-[50px] lg:w-auto lg:h-auto flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'
      onClick={logoutClickHandler}
    >
      <div className='lg:pl-3'>
        <BiLogOut className='dark:fill-white stroke-black w-[30px] h-[30px]' />
      </div>
      <span className='dark:text-white hidden xl:inline pl-5  pr-8 py-3'>
        Logout
      </span>
    </div>
  );
};

export default LogoutTab;
