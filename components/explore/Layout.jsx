import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import LogoutLayout from './LogoutLayout';
import useCurrentUser from '@/hooks/useCurrentUser';
import LoginLayout from './LoginLayout';
import Spinner from '../Spinners/Spinner';

const ExploreLayout = (props) => {
  const { currentUser, isLoading } = useCurrentUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      {!isLoading && (
        <>
          {!isLoggedIn && <LogoutLayout>{props.children}</LogoutLayout>}
          {isLoggedIn && <LoginLayout>{props.children}</LoginLayout>}
        </>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default ExploreLayout;
