import React from 'react';
import LogoutTab from './LogoutTab';
import Spinner from '../Spinners/Spinner';
import SidebarPanel from './SidebarPanel';
import AccountMenu from './AccountMenu';

const Sidebar = () => {
  const spinnerHandler = () => {
    return <Spinner />;
  };

  return (
    <>
      <div className='hidden md:flex md:flex-[0.5] xl:flex-1 h-full  top-0 l-0 flex-row md:justify-end  '>
        <div className='sidebar__wrapper flex flex-col  fixed md:pr-6 xl:pr-10 justify-center items-center'>
          <SidebarPanel />
          <AccountMenu />
          {/* <LogoutTab showSpinner={spinnerHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
