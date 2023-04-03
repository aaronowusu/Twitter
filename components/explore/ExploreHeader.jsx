import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";

const ExploreHeader = () => {
  return (
    <div className="nav h-[107px] w-full bg-white dark:bg-black ">
      <div className="nav__header flex flex-row justify-around py-3 items-center align-middle">
        <Logo />
        <SearchBar />
        <Menu/>
      </div>
      {/* Navigations tabs */}
    </div>
  );
};

export default ExploreHeader;
