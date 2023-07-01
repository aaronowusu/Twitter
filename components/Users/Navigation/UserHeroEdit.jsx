import React, { useRef, useState } from 'react';
import Image from 'next/image';
import useUser from '@/hooks/useUser';
import { Avatar } from '@mui/material';
import { toast } from 'react-hot-toast';

function UserHeroEdit({ userId, setCoverImage, setProfileImage }) {
  const MAX_FILE_SIZE = 1000000; // 1MB
  const { data: fetchedUser, isLoading } = useUser(userId);
  const profileImageInputRef = useRef(null);
  const coverImageInputRef = useRef(null);
  const [profileImagePreview, setProfileImagePreview] = useState(fetchedUser?.profileImage);
  const [coverImagePreview, setCoverImagePreview] = useState(fetchedUser?.coverImage);

  const handleProfileImageInputChange = () => {
    profileImageInputRef.current.click();
  };

  const handleCoverImageInputChange = () => {
    coverImageInputRef.current.click();
  };

  const handleCoverImageSelection = (event) => {
    const file = event.target.files[0];
    if (!file){
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size exceeds the maximum limit');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCoverImage(reader.result);
      setCoverImagePreview(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleProfileImageSelection = (event) => {
    const file = event.target.files[0];
    if (!file){
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size exceeds the maximum limit');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      setProfileImagePreview(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {coverImagePreview && (
          <Image
            src={coverImagePreview}
            fill
            alt="cover image"
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar
            alt="Default Profile Picture"
            src={profileImagePreview}
            sx={{ width: 80, height: 80, position: 'relative' }}
            className="border-1 dark:border-black border-white"
          />
          <input
            type="file"
            accept="image/*"
            ref={profileImageInputRef}
            style={{ display: 'none' }}
            onChange={handleProfileImageSelection}
          />

          <button
            className="bg-[#0f1419] bg-opacity-50 w-8 h-8 absolute inset-x-6 inset-y-8 flex justify-center items-center rounded-full"
            onClick={handleProfileImageInputChange}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="fill-white w-5 h-5"
            >
              <path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path>
            </svg>
          </button>

          <input
            type="file"
            accept="image/*"
            ref={coverImageInputRef}
            style={{ display: 'none' }}
            onChange={handleCoverImageSelection}
          />

          <button
            className="bg-[#0f1419] bg-opacity-30 w-8 h-8 absolute -top-3/4 inset-x-24 flex justify-center items-center rounded-full"
            onClick={handleCoverImageInputChange}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="fill-white w-5 h-5"
            >
              <path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserHeroEdit;
