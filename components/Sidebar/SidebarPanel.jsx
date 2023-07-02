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
import useCurrentUser from '@/hooks/useCurrentUser';


const SidebarPanel = () => {
  const { currentUser } = useCurrentUser();
  
 
  return (
    <>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex flex-col items-start justify-center'>
          <Logo />
          {currentUser&&<SideBarItem name='Home' icon={<HomeIcon />} href='/home' />}
          <ExploreTab />
          <SettingsTab />
         { currentUser&& <SideBarItem
            name='Notifications'
            icon={<NotificationsIcon alert={currentUser?.hasNotification} />}
            href='/notifications'
          />}
     {    currentUser&& <SideBarItem name='Messages' icon={<MessagesIcon />} href='#' />}
          {currentUser&&<SideBarItem name='Lists' icon={<ListsIcon />} href='#' />}
          {currentUser&&<SideBarItem name='Bookmarks' icon={<BookmarksIcon />} href='#' />}
         { currentUser&&<SideBarItem
            name='Twitter Blue'
            icon={<TwitterBlueIcon />}
            href='#'
          />}
       {  currentUser&& <SideBarItem
            name='Profile'
            icon={<ProfileIcon />}
            href={`/users/${currentUser?.id}`}
          />}
          {currentUser&&<SideBarItem name='More' icon={<MoreIcon />} href='#' />}
          {currentUser&&<TweetButton />}
        </div>
        { currentUser&&<div className='sticky bottom-4'>
          <AccountMenu />
        </div>}
      </div>
    </>
  );
};

export default SidebarPanel;
