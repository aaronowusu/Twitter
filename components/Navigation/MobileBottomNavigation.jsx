import React from 'react';
import Link from 'next/link';

const MobileBottomNavigation = () => {
  return (
    <div className=' md:hidden bottom_navigation border-search-text-color border-t fixed inset-x-0 bottom-0 dark:bg-black bg-white '>
      <nav className='h-[52px] flex items-center'>
        <div className='home_button w-1/4 flex justify-center hover:bg-search-bg-color-light dark:hover:bg-hover-grey h-full items-center'>
          <Link href='/home'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='dark:fill-white fill-black'
              width='24'
              height='24'
            >
              <g>
                <path d='M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z'></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className='explore w-1/4 flex justify-center hover:bg-search-bg-color-light dark:hover:bg-hover-grey h-full items-center'>
          <Link href='/explore/tabs/for-you'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='dark:fill-white fill-black'
              width='24'
              height='24'
            >
              <g>
                <path d='M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z'></path>
              </g>
            </svg>
          </Link>
        </div>

        <div className='notifications w-1/4 flex justify-center hover:bg-search-bg-color-light dark:hover:bg-hover-grey h-full items-center'>
          <Link href='/notifications'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='dark:fill-white fill-black'
              width='24'
              height='24'
            >
              <g>
                <path d='M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z'></path>
              </g>
            </svg>
          </Link>
        </div>

        <div className='messages w-1/4 flex justify-center hover:bg-search-bg-color-light dark:hover:bg-hover-grey h-full items-center'>
          <Link href='#'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='dark:fill-white fill-black'
              width='24'
              height='24'
            >
              <g>
                <path d='M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z'></path>
              </g>
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileBottomNavigation;
