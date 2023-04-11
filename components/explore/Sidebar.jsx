import React from "react";
import Logo from "./SidebarLogo";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex md:flex-[0.5] xl:flex-2 h-screen flex-row justify-center">
        <div className="sidebar__wrapper flex flex-col space-y-4">
          <div className="logo pt-4">
            <Logo />
          </div>
          <div className="explore"></div>
          <div className="settings">
            <IoSettingsOutline className="dark:stroke-white stroke-black w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
