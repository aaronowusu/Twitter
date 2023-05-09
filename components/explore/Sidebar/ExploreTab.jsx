import React, { use } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaHashtag } from "react-icons/fa";
import { useRouter } from "next/router";

const ExploreTab = () => {
  const router = useRouter();
  const exploreClickHandler = () => {
    router.push("/");
  };
  return (
    <div
      className="explore md:w-[50px] md:h-[50px] lg:w-auto lg:h-auto flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light  cursor-pointer"
      onClick={exploreClickHandler}
    >
      <div className="lg:pl-3">
        <HiOutlineSearch className=" lg:hidden dark:stroke-white w-[30px] h-[30px]" />
        <FaHashtag className="hidden lg:block dark:fill-white w-[30px] h-[30px]" />
      </div>
      <span className="dark:text-white hidden xl:inline font-bold pl-5  pr-8 py-3">
        Explore
      </span>
    </div>
  );
};

export default ExploreTab;
