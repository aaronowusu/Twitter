import Link from "next/link";
import React from "react";

import NavItem from "./NavigationItem";

const Navigation = () => {
  return (
    <div className="navigation text-search-text-color text-md flex flex-row justify-around ">
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
