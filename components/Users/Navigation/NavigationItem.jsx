import React from 'react';
import Link from 'next/link';

const NavigationItem = (props) => {
  const activeBorder = (
    <div
      className={`border border-twitter-blue pb-1 rounded-md bg-twitter-blue max-w-[56px] w-full mx-auto `}
    ></div>
  );
  return (
    <div className=' flex flex-col justify-center  px-4 h-12 min-w-[56px] cursor-pointer grow text-center dark:hover:bg-hover-grey hover:bg-search-bg-color-light'>
      <Link className={`mb-1 ${props.colour}`} href='#'>
      {props.label}
      </Link>
      {props.label ==='Tweets' && activeBorder}
    </div>
  );
};

export default NavigationItem;
