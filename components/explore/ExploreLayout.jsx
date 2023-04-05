import React, { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Head from "next/head";

const ExploreLayout = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsSticky(scrollTop > 40);
  };

  // Add a scroll event listener to the window
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <div className="flex flex-col h-screen dark:bg-black bg-white">
        <header className="border-b dark:border-search-text-color">
          <div className="nav h-[100px] w-full bg-white dark:bg-black">
            <div className="nav__header flex flex-row justify-around py-3 items-center align-middle">
              <Logo />
              <SearchBar />
              <Menu />
            </div>
            <Navigation isSticky={isSticky} />
          </div>
        </header>

        <div className="flex-1 dark:bg-black border-b dark:border-search-text-color pb-12 mx-3">
          {props.children}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ExploreLayout;
