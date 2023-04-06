import React from "react";

const Menu = () => {
  const menuClickedHandler = () => {
    // show sign in modal
  };
  return (
    <div
      className="nav__menu cursor-pointer ms:w-[15px] ms:h-[15px] mmd:w-[32px] mmd:h-[32px]"
      onClick={menuClickedHandler}
    >
      <svg
        viewBox="0 0 24 24"
        className=" dark:fill-white fill-black w-full h-full"
      >
        <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
      </svg>
    </div>
  );
};

export default Menu;
