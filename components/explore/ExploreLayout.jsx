import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Footer from "./Footer";

const ExploreLayout = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="border-b dark:border-search-text-color">
        <div className="nav h-[100px] w-full bg-white dark:bg-black">
          <div className="nav__header flex flex-row justify-around py-3 items-center align-middle">
            <Logo />
            <SearchBar />
            <Menu />
          </div>
          <Navigation />
        </div>
      </header>

      <div className="flex-1 dark:bg-black border-b dark:border-search-text-color">
        {props.children}
      </div>

      <Footer />
    </div>
  );
};

export default ExploreLayout;
