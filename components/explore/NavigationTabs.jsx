import React from "react";
import NavItem from "./NavigationItem";

const NavigationTabs = () => {
  return (
    <div
      className={`md:hidden navigation text-search-text-color text-xs mmd:text-sm mlg:text-base flex flex-row justify-around px-[20px] dark:border-search-text-color`}
    >
      <div className="for-you whitespace-nowrap">
        <NavItem href="/explore/tabs/for-you">For you</NavItem>
      </div>
      <div className="trending pl-2">
        <NavItem href="/explore/tabs/trending">Trending</NavItem>
      </div>
      <div className="news pl-2">
        <NavItem href="/explore/tabs/news">News</NavItem>
      </div>
      <div className="sports pl-2">
        <NavItem href="/explore/tabs/sports">Sports</NavItem>
      </div>
      <div className="entertainment pl-2">
        <NavItem href="/explore/tabs/entertainment">Entertainment</NavItem>
      </div>
    </div>
  );
};

export default NavigationTabs;
