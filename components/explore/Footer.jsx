import React from "react";
import Button from "./FooterButton";

const Footer = () => {
  return (
    <div className="footer h-[61px] dark:bg-black flex items-center mt-auto">
      <div className="flex flex-row w-full justify-center px-6">
        <Button className=" bg-transparent text-twitter-blue border ">Log in</Button>
        <Button className="bg-twitter-blue">Use app</Button>
      </div>
    </div>
  );
};

export default Footer;
