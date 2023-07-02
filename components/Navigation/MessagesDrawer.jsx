import React from 'react';

const Drawer = ({ isOpen}) => {


  return (
    <div
      className={`fixed bottom-0 right-5 h-1/2 lg:w-80 xl:w-[400px] dark:shadow-3xl shadow-3xl-light dark:bg-black bg-white rounded-t-xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        className={`dark:bg-black bg-white flex items-center justify-between h-14 
          
         rounded-t-xl lg:w-80 xl:w-[400px] cursor-pointer`}
      >
        <div className=' px-4'>
          <h2 className='dark:text-white  text-xl'>Messages</h2>
        </div>
        <div className='flex justify-around space-x-2 px-4 '>
          <div className=' flex items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light w-8 h-8'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='w-6 h-6 dark:fill-white'
            >
              <g>
                <path d='M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z'></path>
              </g>
            </svg>
          </div>
          <div className='flex items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light w-8 h-8'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='w-6 h-6 dark:fill-white'
            >
              <g>
                <path d='M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z'></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className='p-4 flex items-center justify-center dark:text-white'>
        <h1>You have no messages</h1>
      </div>
    </div>
  );
};

export default Drawer;
