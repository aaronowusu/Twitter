import React from "react";
import Menu from "./Menu";

const List = (props) => {
  return (
    <div className=".container flex flex-row justify-between mx-2 mb-4">
      <div className=".info flex flex-col">
        <div className=".trending text-sm text-search-text-color">
          {props.header}
        </div>
        <div className=".title text-md dark:text-white text-black font-medium pb-1 w-3/4">
          {props.title}
        </div>
        <div className=".popularity text-sm text-search-text-color">
          {props.likes} Tweets
        </div>
      </div>
      <div className=".elipsis">
        <Menu />
      </div>
    </div>
  );
};

export default List;
