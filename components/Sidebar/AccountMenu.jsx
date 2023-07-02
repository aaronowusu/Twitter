import React, { useState, useRef } from 'react';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { signOut } from 'next-auth/react';
import useUser from '@/hooks/useUser';
import SpinnerModal from '../Modals/SpinnerModal';

const AccountMenu = () => {
  const { currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(currentUser?.id);
  const [showPopover, setShowPopover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const profileImage = fetchedUser?.profileImage;
  const triggerRef = useRef(null);


  const logoutClickHandler = async () => {
    setIsLoading(true);
    {
      isLoading && <SpinnerModal />;
    }
    await signOut({ callbackUrl: '/explore/tabs/for-you' });
    setIsLoading(false);

    setShowPopover(false);
  };
  if (!fetchedUser) {
    return null;
  }

  const handleClick = () => {
    setShowPopover(!showPopover);
  };

  const handlePopoverClose = () => {
    setShowPopover(false);
  };

  const popover = (
    <Popover
      id='popover-basic'
      className='dark:bg-black bg-white dark:border-hover-grey border rounded-lg z-50 overflow-visible '
    >
      <Popover.Body>
        <div className='flex flex-col'>
          <div className='dark:hover:bg-hover-grey hover:bg-search-bg-color-light text-sm pl-4 py-2 pr-14 cursor-pointer rounded-t-lg'>
            <span className='font-bold dark:text-white text-black'>
              Add an existing account
            </span>
          </div>
          <div
            className='dark:hover:bg-hover-grey dark:bg-black z-10 bg-white hover:bg-search-bg-color-light text-sm pl-4 py-2 pr-14 cursor-pointer rounded-b-lg'
            onClick={logoutClickHandler}
          >
            <span className='font-bold dark:text-white text-black '>
              Log out of @{fetchedUser?.username}
            </span>
          </div>
          <div className='popover-arrow absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-5 border w-5 h-5 border-b border-r dark:border-hover-grey dark:bg-black bg-white rotate-45'></div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div ref={triggerRef}>
      <OverlayTrigger
        trigger='click'
        placement='top'
        overlay={popover}
        show={showPopover}
        onToggle={handleClick}
        rootClose
        rootCloseEvent='mousedown'
        rootCloseEventRef={triggerRef}
        onHide={handlePopoverClose}
      >
        <div className='accountMenu_tab md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-full xl:h-full flex flex-row items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer xl:py-3 xl:px-3'>
          <div className='xl:hidden flex justify-start items-center'>
            <Avatar
              alt='Profile Picture'
              src={profileImage}
              className='w-9 h-9'
            />
          </div>
          <div className='hidden mx-4 xl:flex justify-start items-center'>
            <Avatar
              alt='Profile Picture'
              src={profileImage}
              className='w-9 h-9'
            />
            <div className='flex flex-col mx-3'>
              <span className='dark:text-white hidden xl:inline text-sm font-bold'>
                {fetchedUser?.name}
              </span>
              <span className='hidden xl:inline text-sm dark:text-search-text-color'>
                {`@${fetchedUser?.username}`}
              </span>
            </div>
            <div className='ml-5'>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='dark:fill-white fill-black w-5 h-5'
              >
                <g>
                  <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default AccountMenu;
