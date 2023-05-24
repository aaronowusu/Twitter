import React from 'react';
import { useRouter } from 'next/router';
import Spinner from '../Spinners/Spinner';
import { useState } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';

const DrawerItem = (props) => {
  const router = useRouter();

  return (
    <div className='menuItem flex w-full h-full flex-row items-center    '>
      <span className='mr-6 '>{props.icon}</span>

      <span
        className='font-bold text-base
        dark:text-white '
      >
        {props.name}
      </span>
    </div>
  );
};

export default DrawerItem;