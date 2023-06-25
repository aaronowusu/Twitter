import { format } from 'date-fns';
import React, { useMemo } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import useUser from '@/hooks/useUser';
import useEditModal from '@/hooks/useEditModal';
import useFollow from '@/hooks/useFollow';

const UserBio = ({ userId }) => {
  const { currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);
  const editModal = useEditModal();

  const {isFollowing, toggleFollow} = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }
    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
  }, [fetchedUser?.createdAt]);

  return (
    <div className=''>
      <div className='flex justify-end py-2 px-4'>
        {currentUser?.id === fetchedUser.id ? (
          <button className='dark:bg-black border dark:border-widget-border dark:hover:bg-hover-grey hover:bg-search-bg-color-light dark:text-white font-bold py-2 px-4 rounded-full' onClick={editModal.open}>
            Edit Profile
          </button>
        ) : (
          <button onClick={toggleFollow} className={ ` ${isFollowing ? 'dark:bg-black dark:text-white dark:hover:bg-hover-grey ': 'bg-white text-black  hover:bg-search-bg-color-light'} border dark:border-widget-border   font-bold py-2 px-4 rounded-full`}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
        )}
      </div>
      <div className=' mt-2 px-4 ml-5'>
        <div className='flex flex-col'>
          <p className='dark:text-white text-2xl font-semibold'>
            {fetchedUser?.name}
          </p>
          <p className=' text-sm text-search-text-color'>
            @{fetchedUser?.username}
          </p>
        </div>
        <div className='flex flex-col mt-4'>
          <p className='dark:text-white'>{fetchedUser?.bio}</p>
          <div className='flex flex-row items-center gap-2  text-search-text-color'>
            <span>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='fill-search-text-color w-5 h-5'
              >
                <g>
                  <path d='M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z'></path>
                </g>
              </svg>
            </span>
            <span className='text-sm'> Joined {createdAt}</span>
          </div>
        </div>
        <div className='flex flex-row items-center mt-4 gap-6 text-sm'>
          <div className='flex flex-row items-center gap-1'>
            <p className='dark:text-white font-normal'>{fetchedUser?.followingIds?.length} </p>
            <p className='text-search-text-color'>Following</p>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <p className='dark:text-white followingIds'>{fetchedUser?.followersCount || 0} </p>
            <p className='text-search-text-color'>Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
