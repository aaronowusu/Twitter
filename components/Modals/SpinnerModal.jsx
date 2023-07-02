import React from 'react';
import Spinner from '../Spinners/Spinner';
import { Backdrop } from '@mui/material';

function SpinnerModal() {

  return (
    <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            >
            <Spinner />
        </Backdrop>

     
      
    </>
  );
}

export default SpinnerModal;
