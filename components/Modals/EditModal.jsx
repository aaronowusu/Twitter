import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import useEditModal from '@/hooks/useEditModal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery } from '@mui/material';
import UserHeroEdit from '../Users/Navigation/UserHeroEdit';
import useCurrentUser from '@/hooks/useCurrentUser';
import useUser from '@/hooks/useUser';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function EditModal() {
  const router = useRouter();
  const { currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const isMediumScreen = useMediaQuery('(min-width: 768px)');
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState(
    currentUser?.profileImage || ''
  );
  const [coverImage, setCoverImage] = useState(currentUser?.coverImage || '');
  const [name, setName] = useState(currentUser?.name || '');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setProfileImage(currentUser.profileImage);
      setCoverImage(currentUser.coverImage);
      setName(currentUser.name);
      setUsername(currentUser.username);
      setBio(currentUser.bio);
    }
  }, [currentUser]);

  const closeHandler = () => {
    editModal.close();
  };

  const editBirthdayHandler = (e) => {
    e.preventDefault();
    toast.error('This feature is not available yet');
  };
  const submitHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch('/api/edit', {
        profileImage,
        coverImage,
        name,
        username,
        bio,
      });
      mutateFetchedUser();
      toast.success('Profile updated successfully');
      editModal.close();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong, please try again later');
    } finally {
      setIsLoading(false);
    }
  }, [
    bio,
    coverImage,
    mutateFetchedUser,
    name,
    profileImage,
    username,
    editModal,
  ]);

  useEffect(() => {
    if (editModal.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [editModal]);

  if (!editModal.isOpen) {
    return null;
  }

  return (
    <>
      <div className=' backdrop flex justify-center items-center fixed inset-0  z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70'>
        <div className='relative w-full h-full md:w-[600px] md:h-[650px] dark:bg-black bg-search-bg-color-light rounded-xl'>
          <div className='top_section flex px-4 h-[53px] w-full justify-between items-center grow'>
            <div className='close_button '>
              <button
                onClick={closeHandler}
                className='focus:outline-none hover:opacity-80 transition items-center'
              >
                <AiOutlineClose
                  className='ms:hidden md:block dark:text-white text-2xl'
                  size={20}
                />
                {!isMediumScreen && (
                  <ArrowBackIcon
                    className='dark:text-white text-2xl'
                    size={20}
                  />
                )}
              </button>
            </div>
            <div className='title dark:dark:text-white whitespace-nowrap '>
              Edit Profile
            </div>
            <div className=' flex justify-end '>
              <button
                className='dark:bg-white rounded-full px-4 py-1 text-sm font-semibold hover:opacity-70'
                onClick={submitHandler}
              >
                Save
              </button>
            </div>
          </div>
          <div className='w-full mx-auto flex flex-col gap-10'>
            <UserHeroEdit
              userId={currentUser?.id}
              setProfileImage={setProfileImage}
              profileImage={profileImage}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />
            <div className='g'></div>
            <div className=' max-w-[600px] w-full px-8 m-auto'>
              <form className='flex flex-col gap-2'>
                <div className='relative  '>
                  <input
                    type='text'
                    id='name'
                    className='w-full h-full bg-transparent border border-search-text-color dark:text-white focus:outline-none focus:border-twitter-blue px-4 pt-4 pb-2 rounded-lg text-sm'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label
                    htmlFor='name'
                    className='absolute inset-x-0 top-1 text-xs text-search-text-color pointer-events-none px-4 transition-colors'
                  >
                    Name
                  </label>
                </div>

                <div className='relative '>
                  <textarea
                    type='text'
                    id='bio'
                    value={bio}
                    className='w-full h-full bg-transparent border border-search-text-color dark:text-white text-sm focus:outline-none focus:border-twitter-blue px-4 pt-4 pb-2 rounded-lg'
                    onChange={(event) => setBio(event.target.value)}
                  />
                  <label
                    htmlFor='bio'
                    className='absolute inset-x-0 top-1 text-xs text-search-text-color pointer-events-none px-4 transition-colors'
                  >
                    Bio
                  </label>
                </div>
                <div className='relative  '>
                  <input
                    type='text'
                    id='location'
                    className='w-full h-full bg-transparent border border-search-text-color dark:text-white focus:outline-none focus:border-twitter-blue px-4 pt-4 pb-2 rounded-lg text-sm'
                    placeholder='City, Country'
                  />
                  <label
                    htmlFor='location'
                    className='absolute inset-x-0 top-1 text-xs text-search-text-color pointer-events-none px-4 transition-colors'
                  >
                    Location
                  </label>
                </div>
                <div className='relative  '>
                  <input
                    type='text'
                    id='website'
                    className='w-full h-full bg-transparent border border-search-text-color dark:text-white focus:outline-none focus:border-twitter-blue px-4 pt-4 pb-2 rounded-lg text-sm'
                    placeholder='https://'
                  />
                  <label
                    htmlFor='website'
                    className='absolute inset-x-0 top-1 text-xs text-search-text-color pointer-events-none px-4 transition-colors'
                  >
                    Website
                  </label>
                </div>

                <div className='flex flex-col'>
                  <div>
                    <span className='text-sm text-search-text-color'>
                      Birth date •{' '}
                    </span>
                    <span>
                      <button
                        className='text-sm text-twitter-blue focus:outline-none'
                        onClick={editBirthdayHandler}
                      >
                        Edit
                      </button>
                    </span>
                  </div>
                  <div className='leading-6 font-normal dark:text-white text-xl'>
                    1 January 0000
                  </div>

                  <div
                    className=' dark:text-white text-xl  mt-2 flex flex-row py-2 justify-between items-center dark:hover:bg-search-bg-color-dark hover:bg-search-bg-color-light cursor-pointer'
                    onClick={() =>
                      toast.error('This feature is not available yet')
                    }
                  >
                    <div>Switch to professional</div>
                    <div>
                      <svg
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        className='w-5 h-5 dark:fill-search-text-color'
                      >
                        <g>
                          <path d='M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z'></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  .relative:focus-within label {
                    color: #1b9bf0;
                  }
                `}</style>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
