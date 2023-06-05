import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationPanel = () => {
  return (
    <nav className='border-b dark:border-widget-border flex flex-row items-center'>
      <NavigationItem colour='dark:text-white' label='Tweets' />
      <NavigationItem colour='text-search-text-color' label='Replies' />
      <NavigationItem colour='text-search-text-color' label='Media' />
      <NavigationItem colour='text-search-text-color' label='Likes' />
    </nav>
  );
};

export default NavigationPanel;
