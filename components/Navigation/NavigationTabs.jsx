import React from "react";
import NavigationPanel from "./NavigationPanel";

const NavigationTabs = () => {
  return (
    <div
      className={`md:hidden navigation text-search-text-color text-xs mmd:text-sm mlg:text-base flex flex-row justify-around  px-[20px] dark:border-search-text-color`}
    >
      <NavigationPanel/>
    </div>
  );
};

export default NavigationTabs;
