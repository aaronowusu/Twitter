import React from 'react';
import { useRouter } from 'next/router';


const DrawerItem = (props) => {
  const router = useRouter();

  return (
    <div className='menuItem flex w-full h-full flex-row items-center  ' onClick={props.onClick}>
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
