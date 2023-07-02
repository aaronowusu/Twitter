import React, { useEffect } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import useNotifications from '@/hooks/useNotifications';
import { BsTwitter } from 'react-icons/bs';

const NotificationsFeed = () => {
  const { currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className='text-search-text-color p-6 text-center text-xl'>
        You don&apos;t post have any notifications yet.
      </div>
    );
  }
  return (
    <div className='flex flex-col'>
      {fetchedNotifications.map((notification) => {
        return (
          <div
            key={notification.id}
            className='flex flex-row items-center p-6 gap-4 border-b dark:border-hover-grey dark:hover:bg-list-hover hover:bg-search-bg-color-light opacity-95 '
          >
            <BsTwitter className='text-twitter-blue dark:text-white' size={32} />
            <p className='dark:text-white'>{notification.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationsFeed;
