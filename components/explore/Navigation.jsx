import React from "react";
import NavItem from "./NavigationItem";

const Navigation = ({ isSticky }) => {
  return (
    <div
      className={`navigation text-search-text-color text-md flex flex-row justify-around px-3 dark:border-search-text-color ${
        isSticky
          ? "fixed top-0 w-full bg-white dark:bg-black mb-4 pt-4 z-10 border-b bg-opacity-95 dark:bg-opacity-95"
          : ""
      }`}
    >
      <div className="for-you">
        <NavItem href="/explore/tabs/for-you">For you</NavItem>
      </div>
      <div className="trending">
        <NavItem href="/explore/tabs/trending">Trending</NavItem>
      </div>
      <div className="news">
        <NavItem href="/explore/tabs/news">News</NavItem>
      </div>
      <div className="sports">
        <NavItem href="/explore/tabs/sports">Sports</NavItem>
      </div>
      <div className="entertainment">
        <NavItem href="/explore/tabs/entertainment">Entertainment</NavItem>
      </div>
    </div>
  );
};

export default Navigation;
