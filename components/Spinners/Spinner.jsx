import React from 'react';
import { RingLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <RingLoader color='#1da1f2' size={50} />
    </div>
  );
};

export default Spinner;
