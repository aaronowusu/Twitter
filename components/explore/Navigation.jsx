import React from "react";
import NavItem from "./NavigationItem";
import StickyNavigation from "./StickyNavigation";
import NavigationTabs from "./NavigationTabs";
import { useState, useEffect } from "react";

const Navigation = ({ isSticky }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      {!isSticky && <NavigationTabs />}
      {isSticky && isSmallScreen && (
        <div
          className={`navigation text-search-text-color text-xs mmd:text-sm mlg:text-base flex flex-row justify-around px-[20px] dark:border-search-text-color ${
            isSticky
              ? `fixed top-0  ms:w-full md:w-[511px] lg:w-[574px]  2xl:w-[766px] ms:h-[50px] mmd:h-[56px] bg-white dark:bg-black mb-4 pt-4 z-10 border-b opacity-95`
              : ""
          } `}
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
      )}
      {!isSmallScreen && <StickyNavigation />}
    </>
  );
};

export default Navigation;
