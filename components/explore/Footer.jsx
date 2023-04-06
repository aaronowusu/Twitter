import React from "react";
import Button from "./FooterButton";

const Footer = () => {
  return (
    <div className="footer h-[61px] dark:bg-black flex items-center fixed bottom-0 left-0 right-0 border-t dark:border-search-text-color bg-white">
      <div className="flex flex-row w-full justify-center px-6">
        <Button className=" bg-transparent text-twitter-blue border dark:border-search-text-color">
          Log in
        </Button>
        <Button className="bg-twitter-blue text-white">Sign up</Button>
      </div>
    </div>
  );
};

export default Footer;
