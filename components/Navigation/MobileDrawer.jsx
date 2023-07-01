import React from 'react';
import useMobileDrawer from '@/hooks/useMobileDrawer';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import useCurrentUser from '@/hooks/useCurrentUser';
import AddIcon from '@mui/icons-material/Add';
import DrawerItem from './MobileDrawerItem';
import ProfileIcon from '../Sidebar/Icons/ProfileIcon';
import TwitterBlueIcon from '../Sidebar/Icons/TwitterBlueIcon';
import ListsIcon from '../Sidebar/Icons/ListsIcon';
import BookmarksIcon from '../Sidebar/Icons/BookmarksIcon';
import VerifiedOrgsIcon from '../Sidebar/Icons/VerifiedOrgsIcon';
import FollowerRequestsIcon from '../Sidebar/Icons/FollowerRequestsIcon';
import LogoutTab from '../Sidebar/LogoutTab';
import useUser from '@/hooks/useUser';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const MobileDrawer = () => {
  const router = useRouter();
  const mobileDrawer = useMobileDrawer();
  const { currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(currentUser?.id);

  const goToUser = useCallback(
    async (event) => {
      event.stopPropagation();
      await router.push(`/users/${currentUser?.id}`);
      mobileDrawer.close();
    },
    [router, currentUser?.id, mobileDrawer]
  );

  return (
    <>
      <div
        className='md:hidden backdrop xs:flex justify-center items-center fixed inset-0 z-20 outline-none focus:outline-none bg-neutral-800 bg-opacity-70'
        onClick={mobileDrawer.close}
      ></div>
      <div
        className={`z-50 fixed  bottom-0 left-0 h-full w-3/4 dark:bg-black overflow-auto bg-white shadow-3xl transform transition-transform duration-300 ${
          mobileDrawer.isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full '>
          <div className='text-white flex justify-between p-4'>
            <h2>Account info</h2>
            <CloseIcon
              onClick={mobileDrawer.close}
              className='cursor-pointer'
            />
          </div>
          <div className='accountInfo p-4 flex flex-col '>
            <div className='profile_pic flex justify-between items-center'>
              <div
                className='avatar'
                onClick={goToUser}
              >
                <Avatar
                  alt='Profile Picture'
                  src={currentUser?.profileImage}
                  className='cursor-pointer'
                  sx={{ width: 40, height: 40 }}
                />
              </div>
              <div className='plus w-7 h-7 border border-[#536471] rounded-full flex justify-center items-center'>
                <AddIcon
                  className='cursor-pointer dark:text-white'
                  sx={{ width: 20, height: 20 }}
                />
              </div>
            </div>
            <div className='profileInfo mt-2'>
              <div className='profileName dark:text-white text-base'>
                <h2>{currentUser?.name}</h2>
              </div>
              <div className='username dark:text-search-text-color text-sm'>
                <h3>@{currentUser?.username}</h3>
              </div>
            </div>
            <div className='user_stats flex mt-3 justify-between'>
              <div className='flex'>
                <div className='mr-5'>
                  <span className='dark:text-white text-base font-bold'>{currentUser?.followingIds.length}</span>
                  <span className='dark:text-search-text-color text-sm'>
                    {' '}
                    Following
                  </span>
                </div>
                <div>
                  <span className='dark:text-white text-base font-bold'>{ fetchedUser?.followersCount}</span>
                  <span className='dark:text-search-text-color text-sm'>
                    {' '}
                    Followers
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='profile_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem name='Profile' icon={<ProfileIcon />} onClick={goToUser} />
          </div>
          <div className='twitterBlue_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem
              name='Twitter Blue'
              icon={<TwitterBlueIcon />}
              href='#'
            />
          </div>
          <div className='lists_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem name='Lists' icon={<ListsIcon />} href='#' />
          </div>
          <div className='bookmarks_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem name='Bookmarks' icon={<BookmarksIcon />} href='#' />
          </div>
          <div className='verifiedOrgs_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem
              name='Verified Orgs'
              icon={<VerifiedOrgsIcon />}
              href='#'
            />
          </div>
          <div className='followerRequests_tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <DrawerItem
              name='Follower Requests'
              icon={<FollowerRequestsIcon />}
              href='#'
            />
          </div>
          <div className='divider border-t mx-4 mb-1 border-search-text-color'></div>

          <div className=' flex w-full h-full flex-row items-center  justify-between  p-4 dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <span
              className='font-bold text-sm
        dark:text-white '
            >
              Creator Studio
            </span>
            <span>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className=' w-5 h-5 dark:fill-white'
              >
                <g>
                  <path d='M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z'></path>
                </g>
              </svg>
            </span>
          </div>
          <div className=' flex w-full h-full flex-row items-center  justify-between  p-4 dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <span
              className='font-bold text-sm
        dark:text-white '
            >
              Professional Tools
            </span>
            <span>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className=' w-5 h-5 dark:fill-white'
              >
                <g>
                  <path d='M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z'></path>
                </g>
              </svg>
            </span>
          </div>
          <div className=' flex w-full h-full flex-row items-center  justify-between  p-4 dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>
            <span
              className='font-bold text-sm
        dark:text-white '
            >
              Settings and Support
            </span>
            <span>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className=' w-5 h-5 dark:fill-white'
              >
                <g>
                  <path d='M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z'></path>
                </g>
              </svg>
            </span>
          </div>
          <div className=' logout_Tab p-4 flex items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'>

          <LogoutTab />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default MobileDrawer;
