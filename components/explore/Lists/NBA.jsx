import Image from "next/image";
import React from "react";

const Nba = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="header flex flex-row justify-between dark:text-white mx-2 my-2">
          <div className="text-xs font-bold">NBA</div>
          <div className="text-xs font-medium text-search-text-color flex items-center">
            <span className="font-bold">Final</span>
            <span className="mx-1 mb-1.5 self-center">.</span> LAC won
          </div>
        </div>

        <div className="card flex flex-col text-white mx-2">
          <div className="chelsea flex flex-row justify-between bg-lal-purple rounded-t-md p-2 mb-0">
            <div className="logo name flex flex-row items-center">
              <Image
                alt="Los Angeles Lakers Logo"
                src="/lal.svg"
                width={30}
                height={30}
                styles={{ width: "auto", height: "auto" }}
                priority
              />
              <span className="mx-2">Los Angeles Lakers</span>
            </div>
            <div className="score mr-2 text-lg font-bold text-lal-text-purple">
              118
            </div>
          </div>
          <div className="liverpool flex flex-row justify-between bg-liverpool-red rounded-b-md p-2">
            <div className="logo name flex flex-row items-center">
              <Image
                alt="Los Angeles Clippers Logo"
                src="/lac.svg"
                width={30}
                height={30}
                styles={{ width: "auto", height: "auto" }}
                priority
              />

              <span className="mx-2">Los Angeles Clippers</span>
            </div>
            <div className="score mr-2 text-lg font-bold">125</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nba;
