import React from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNowStrict } from 'date-fns';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { Avatar } from '@mui/material';
import Menu from '../explore/Lists/Menu';


const CommentItem = ({ data }) => {
  const router = useRouter();

  const goToUser = useCallback(
    (event) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);
  return (
    <div
      className='border-b dark:border-widget-border w-full  px-4 py-3 cursor-pointer flex flex-row items-start dark:hover:bg-list-hover hover:bg-search-bg-color-light'
    >
      <Avatar
        alt='Default Profile Picture'
        src={data?.user?.profileImage}
        sx={{ width: 48, height: 48, position: 'relative' }}
        className='border-1 dark:border-black border-white mr-3'
        onClick={goToUser}
      />
      <div className='flex flex-col w-full '>
        <div className='flex flex-row justify-between '>
          <div className='flex flex-row  items-center gap-2 '>
            <span
              onClick={goToUser}
              className='text-[15px] font-bold dark:text-white hover:underline'
            >
              {data?.user?.name}
            </span>
            <span
              onClick={goToUser}
              className='text-[15px] text-search-text-color'
            >
              @{data?.user?.username}
            </span>
            <span className='text-[15px] pb-2 text-search-text-color'>. </span>
            <span className='text-[15px] text-search-text-color'>
              {createdAt}
            </span>
          </div>
          <Menu />
        </div>
        <div className='body'>
          <p className='text-[15px] dark:text-white'>{data?.body}</p>
        </div>
       
      </div>
    </div>
  );
};

export default CommentItem;
