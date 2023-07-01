import React from 'react';
import Button from './FooterButton';



const Footer = () => {


  return (
    <>
      <div className='md:hidden footer h-[61px] dark:bg-black flex items-center fixed bottom-0 left-0 right-0 border-t dark:border-search-text-color bg-white'>
        <div className='flex flex-row w-full justify-center px-6'>
          <Button className=' bg-transparent text-twitter-blue border dark:border-search-text-color'>
            Log in
          </Button>
          <Button className='bg-twitter-blue text-white'>Sign up</Button>
        </div>
      </div>
      <div className='hidden h-[72px] md:flex fixed bottom-0 items-center left-0 right-0 border-t dark:border-search-text-color bg-twitter-blue wrapper flex-row justify-around py-4 pl-10 '>
        <div className='text flex flex-col justify-start'>
          <span className='text-white font-bold text-2xl'>
            Don&lsquo;t miss what&#39;s happening
          </span>
          <span className='text-white text-sm'>
            People on Twitter are the first to know.
          </span>
        </div>
        <div className='buttons '>
          <Button className='bg-transparent border text-white'>Log in</Button>
          <Button className='bg-white'>Sign up</Button>
        </div>
      </div>
    </>
  );
};

export default Footer;
