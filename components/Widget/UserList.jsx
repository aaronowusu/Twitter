import React from 'react';
import { Avatar } from '@mui/material';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';

const UserList = (props) => {
  const { data: fetchedUser } = useUser(props.userId);
  const router = useRouter();
  const url = `/users/${props.userId}`;

  return (
    <div className='container flex flex-row  my-4 dark:hover:bg-list-hover hover:bg-[#dbe0e0] hover:cursor-pointer'>
      <div className='avatar  px-2 '>
        <Avatar
          alt='Profile Image'
          src={fetchedUser?.profileImage}
          sx={{ width: 46, height: 46 }}
          onClick={() => router.push(url)}
        />
      </div>
      <div className='flex flex-row justify-between items-center w-full '>
        <div className='username flex flex-col px-4'>
          <span className='font-bold text-sm dark:text-white'>
            {fetchedUser?.name}
          </span>
          <span className='text-xs text-gray-500'>@{fetchedUser?.username}</span>
        </div>

        <div className='follow_button flex flex-row items-center justify-center pr-6 '>
          <button className='dark:bg-white bg-black text-white dark:text-black rounded-full px-4 py-2 text-sm font-bold'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
