import Image from "next/image";
import React from "react";

const PremierLeague = () => {
  return (
    <>
      <div className=".container mb-5">
        <div className=".header flex flex-row justify-between dark:text-white mx-2 my-2">
          <div className="text-xs font-bold">Premier League</div>
          <div className="text-xs font-bold text-search-text-color">Final</div>
        </div>
        <div className=".card flex flex-col text-white mx-2">
          <div className=".chelsea flex flex-row justify-between bg-chelsea-blue rounded-t-md p-2 mb-0">
            <div className=".logo .name flex flex-row items-center">
              <Image
                alt="Chelsea Logo"
                src="/chelsea.png"
                width={30}
                height={30}
                styles={{ width: "auto", height: "auto" }}
                priority
              />
              <span className="mx-2">Chelsea</span>
            </div>
            <div className="score mr-2 text-lg font-bold">0</div>
          </div>
          <div className=".liverpool flex flex-row justify-between bg-liverpool-red rounded-b-md p-2">
            <div className=".logo .name flex flex-row items-center">
              <Image
                alt="Liverpool Logo"
                src="/liverpool.svg"
                width={30}
                height={30}
                styles={{ width: "auto", height: "auto" }}
                priority
              />

              <span className="mx-2">Liverpool</span>
            </div>
            <div className="score mr-2 text-lg font-bold">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremierLeague;
