import React from 'react';
import SocialButton from './SocialButton';
import WidgetFooter from './WidgetFooter';
import useRegistrationModal from '@/hooks/useRegistrationModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import List from './ListItem';
import dummyData from '@/model/for-you';
import Link from 'next/link';
import UserList from './UserList';
import { useRouter } from 'next/router';
import Drawer from '../Navigation/MessagesDrawer';
import useUsers from '@/hooks/useUsers';


const Widgets = () => {
  const registrationModal = useRegistrationModal();
  const [isLogged, setIsLogged] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const { currentUser } = useCurrentUser();
  const { data: users = [] } = useUsers();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleExpandDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };



  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [currentUser]);
  useEffect(() => {
    if (router.pathname === '/home' || router.pathname === '/users/[userId]') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [router.pathname]);
  const firstThreeItems = dummyData.slice(0, 3);
  const filteredUsers = users.filter((user) => user.id !== currentUser?.id);

  const filteredFollowSuggestions = filteredUsers.filter(
    (user) => !currentUser?.followingIds.includes(user.id)
  );

  const firstThreeUsers = filteredFollowSuggestions.slice(0, 3);

  const showWidget = firstThreeUsers.length !== 0;

  return (
    <>
      <div className='hidden md:flex md:flex-[0.5] lg:flex-1  h-screen dark:bg-black '>
        {!isLogged && (
          <div className='logout_widget hidden fixed top-4 dark:text-white lg:flex justify-center flex-col'>
            <div className='core mb-4 rounded-xl border ml-4 lg:w-[280px] xl:w-[330px] 2xl:w-[370px] dark:border-widget-border border-[#EFF0F2]'>
              <section className='flex flex-col '>
                <div className='header py-3 px-4'>
                  <h2 className='font-extrabold text-xl whitespace-nowrap'>
                    New to Twitter?
                  </h2>
                </div>
                <div className='subheader text-xs xl:text-sm text-gray-500 px-4 2xl:whitespace-nowrap'>
                  <span className=''>
                    Sign up now to get your own personalized timeline!
                  </span>
                </div>
                <div className='buttons  my-4 mx-3'>
                  <div className='google_signin '>
                    <SocialButton src='/google.png'>
                      Sign up with Google
                    </SocialButton>
                  </div>
                  <div className='apple_signin font-extrabold'>
                    <SocialButton src='/apple.png'>
                      Sign up with Apple
                    </SocialButton>
                  </div>
                  <div className='create_account font-bold'>
                    <button
                      className=' rounded-full w-full bg-white text-black h-[38px] px-2 py-1.5 dark:hover:opacity-80 hover:bg-[#E6E6E6] my-1 border border-[#EFF0F2]'
                      onClick={registrationModal.open}
                    >
                      Create account
                    </button>
                  </div>
                </div>
                <div className='text-xs px-4 text-gray-500 mb-4'>
                  By signing up, you agree to the{' '}
                  <a href='#' className='text-blue-500 hover:underline'>
                    Terms of Service{' '}
                  </a>
                  and{' '}
                  <a href='#' className='text-blue-500 hover:underline'>
                    Privacy Policy{' '}
                  </a>
                  , including{' '}
                  <a href='#' className='text-blue-500 hover:underline'>
                    Cookie Use.
                  </a>
                </div>
              </section>
            </div>
            <WidgetFooter />
          </div>
        )}
        <div className='flex flex-col items-center mx-4'>
          {isHomePage && isLogged && (
            <div className='search__bar fixed top-0 pt-5 hidden w-[320px] lg:flex justify-center z-2 mb-3 min-h-[32px]  dark:bg-black'>
              <SearchBar />
            </div>
          )}
          {isHomePage && isLogged && (
            <div className='happening_now mt-20 w-[320px] hidden lg:block bg-search-bg-color-light dark:bg-search-bg-color-dark rounded-2xl h-[400px]'>
              <section className='flex flex-col py-3 '>
                <div className='text-left px-2'>
                  <h2 className='text-xl font-bold dark:text-white '>
                    Happening now
                  </h2>
                </div>
                <div className='trending_items'>
                  <ul>
                    {firstThreeItems.map((item) => {
                      return (
                        <List
                          key={item.id}
                          title={item.title}
                          likes={item.likes}
                          header='Trending in the United Kingdom'
                        >
                          {item.title}
                        </List>
                      );
                    })}
                  </ul>
                </div>
                <div className=''>
                  <Link href='/' className='text-twitter-blue  text-sm px-2 '>
                    Show more
                  </Link>
                </div>
              </section>
            </div>
          )}

          {isLogged && (
            <div className='follow  hidden lg:block mt-10'>
              <div className={` ${!isHomePage ? 'fixed top-5' : ''}  `}>
                {showWidget && (
                  <section className='flex flex-col py-3 bg-search-bg-color-light dark:bg-search-bg-color-dark rounded-2xl w-[320px]'>
                    <div className='text-left px-2'>
                      <h2 className='text-xl font-bold dark:text-white '>
                        Who to follow
                      </h2>
                    </div>
                    <div className='users'>
                      <ul>
                        {firstThreeUsers.map((user) => {
                          return (
                            <UserList
                              key={user.id}
                              userId={user.id}
                              name={user.name}
                              username={user.username}
                              profileImage={user.profileImage}
                            />
                          );
                        })}
                      </ul>
                      <div className='px-4'>
                        <Link href='' className='text-twitter-blue  text-sm  '>
                          Show more
                        </Link>
                      </div>
                    </div>
                  </section>
                )}
                <div>
                  {isHomePage && (
                    <div className='mt-2'>
                      <WidgetFooter />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {isLogged && (
            <div
              className={` messagesdrawer dark:bg-black bg-white hidden fixed lg:flex items-center justify-between h-14 ${
                !isDrawerOpen ? 'dark:shadow-3xl shadow-3xl-light ' : ''
              } rounded-t-xl bottom-0  right-5 lg:w-80 xl:w-[400px] cursor-pointer`}
              onClick={handleExpandDrawer}
            >
              <div className=' px-4'>
                <h2 className='dark:text-white text-xl'>Messages</h2>
              </div>
              <div className='flex justify-around space-x-2 px-4 '>
                <div className='flex items-center justify-center rounded-full dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light w-8 h-8'>
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
                      <path d='M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z'></path>
                    </g>
                  </svg>
                </div>
              </div>
              {isDrawerOpen && (
                <Drawer
                  isOpen={isDrawerOpen}
                  onClose={handleCloseDrawer}
                  onExpand={handleExpandDrawer}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Widgets;
