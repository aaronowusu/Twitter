import React from "react";
import Logo from "./SidebarLogo";
import SettingsTab from "./SettingsTab";
import ExploreTab from "./ExploreTab";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex md:flex-[0.5] xl:flex-2 h-screen top-0 l-0 flex-row md:justify-end xl:justify-center ">
        <div className="sidebar__wrapper mt-4 flex flex-col space-y-5 fixed md:pr-6 ">
          <Logo />
          <ExploreTab />
          <SettingsTab />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
