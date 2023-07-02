import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';


const LogoutTab = () => {
  const { currentUser } = useCurrentUser();

  const logoutClickHandler = async () => {
    await signOut({ callbackUrl: '/explore/tabs/for-you' });
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div
      className='logout  flex flex-row items-center justify-between '
      onClick={logoutClickHandler}
    >
      <span className='mr-6 '>
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='dark:fill-white fill-black '
          width='24'
          height='24'
        >
          <g>
            <path d='M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z'></path>
          </g>
        </svg>
      </span>
      <span className='dark:text-white text-sm font-semibold'>Logout</span>
    </div>
  );
};

export default LogoutTab;
