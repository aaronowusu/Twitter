import React from 'react';
import Image from 'next/image';
import useUser from '@/hooks/useUser';
import { Avatar } from '@mui/material';

function UserHero({ userId }) {
  const { data: fetchedUser, isLoading } = useUser(userId);
  return (
    <div>
      <div className='bg-neutral-700 h-44 relative'>
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser?.coverImage}
            fill
            alt='cover image'
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className='absolute -bottom-16 left-4'>
          <Avatar
            alt='Default Profile Picture'
            src={fetchedUser?.profileImage}
            sx={{ width: 80, height: 80}}
            className='border-1 dark:border-black border-white'
          />
        </div>
      </div>
    </div>
  );
}

export default UserHero;
