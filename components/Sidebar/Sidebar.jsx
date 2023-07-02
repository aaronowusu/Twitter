import React from 'react';
import Spinner from '../Spinners/Spinner';
import SidebarPanel from './SidebarPanel';

const Sidebar = () => {
  const spinnerHandler = () => {
    return <Spinner />;
  };

  return (
    <>
      <div className='hidden md:flex md:flex-[0.5]  xl:flex-1 h-full  top-0 flex-row md:justify-end  '>
        <div className='sidebar__wrapper flex flex-col top-0 fixed px-2 justify-between items-end  w-full max-w-[190px] h-full '>
          <SidebarPanel />


        </div>
      </div>
    </>
  );
};

export default Sidebar;
