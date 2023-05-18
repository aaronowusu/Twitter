import React from 'react';
import SideBarItem from './SidebarItem';
import HomeIcon from './Icons/HomeIcon';
import NotificationsIcon from './Icons/NotificationsIcon';
import MessagesIcon from './Icons/MessagesIcon';
import ListsIcon from './Icons/ListsIcon';
import BookmarksIcon from './Icons/BookmarksIcon';
import TwitterBlueIcon from './Icons/TwitterBlueIcon';
import ProfileIcon from './Icons/ProfileIcon';
import MoreIcon from './Icons/MoreIcon';
import SettingsTab from './SettingsTab';
import ExploreTab from './ExploreTab';
import Logo from './SidebarLogo';
import TweetButton from './TweetButton';
import AccountMenu from './AccountMenu';

const SidebarPanel = () => {
  return (
    <>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex flex-col items-start justify-center'>
          <Logo />
          <SideBarItem name='Home' icon={<HomeIcon />} href='/home' />
          <ExploreTab />
          <SettingsTab />
          <SideBarItem
            name='Notifications'
            icon={<NotificationsIcon />}
            href='#'
          />
          <SideBarItem name='Messages' icon={<MessagesIcon />} href='#' />
          <SideBarItem name='Lists' icon={<ListsIcon />} href='#' />
          <SideBarItem name='Bookmarks' icon={<BookmarksIcon />} href='#' />
          <SideBarItem
            name='Twitter Blue'
            icon={<TwitterBlueIcon />}
            href='#'
          />
          <SideBarItem name='Profile' icon={<ProfileIcon />} href='#' />
          <SideBarItem name='More' icon={<MoreIcon />} href='#' />
          <TweetButton />
        </div>
        <div className='sticky bottom-4'>
          <AccountMenu />
        </div>
      </div>
    </>
  );
};

export default SidebarPanel;
