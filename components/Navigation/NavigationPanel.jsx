import React from 'react';
import NavItem from './NavigationItem';

const NavigationPanel = () => {
  return (
    <>
      <div className='for-you whitespace-nowrap dark:hover:bg-hover-grey hover:bg-search-bg-color-light basis-1/5 text-center'>
        <NavItem href='/explore/tabs/for-you'>For you</NavItem>
      </div>
      <div className='trending pl-2 dark:hover:bg-hover-grey hover:bg-search-bg-color-light basis-1/5 text-center'>
        <NavItem href='/explore/tabs/trending'>Trending</NavItem>
      </div>
      <div className='news pl-2 dark:hover:bg-hover-grey hover:bg-search-bg-color-light basis-1/5 text-center'>
        <NavItem href='/explore/tabs/news'>News</NavItem>
      </div>
      <div className='sports pl-2 dark:hover:bg-hover-grey hover:bg-search-bg-color-light basis-1/5 text-center'>
        <NavItem href='/explore/tabs/sports'>Sports</NavItem>
      </div>
      <div className='entertainment pl-2 dark:hover:bg-hover-grey hover:bg-search-bg-color-light basis-1/5 text-center'>
        <NavItem href='/explore/tabs/entertainment'>Entertainment</NavItem>
      </div>
    </>
  );
};

export default NavigationPanel;
