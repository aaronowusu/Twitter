import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

function SocialButton(props) {
  const handleSocialButton = () => {
    toast.error('This feature is not available yet');
  };
  return (
    <button
      className={` rounded-full lg:w-full  bg-white text-black  px-2 py-1 dark:hover:opacity-80 hover:bg-[#E6E6E6] my-1 border border-[#EFF0F2] ${props.className}`}
      onClick={handleSocialButton}
    >
      <div className='flex flex-row justify-center items-center'>
        <Image
          className='mx-2'
          src={props.src}
          width={30}
          height={30}
          alt='Social Login logo'
        />
        {props.children}
      </div>
    </button>
  );
}

export default SocialButton;
