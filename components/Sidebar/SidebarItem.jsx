import React from 'react';
import { useRouter } from 'next/router';

const SideBarItem = (props) => {
  const router = useRouter();
  const makeBold = router.pathname === props.href;
  const clickHandler = async () => {
    await router.push(props.href);
  };

  return (
    <div
      className='sideBar__tab  md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[40px] xl:w-auto xl:h-auto flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer xl:pl-4'
      onClick={clickHandler}
    >
      {props.icon}

      <span
        className={`${
          makeBold && 'font-bold'
        } dark:text-white hidden xl:inline pl-3  pr-8 py-3`}
      >
        {props.name}
      </span>
    </div>
  );
};

export default SideBarItem;
