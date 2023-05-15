import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import LogoutLayout from './LogoutLayout';
import useCurrentUser from '@/hooks/useCurrentUser';
import LoginLayout from './LoginLayout';



const ExploreLayout = (props) => {
  const { currentUser, isLoading, error } = useCurrentUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (currentUser) {
      if(!isLoading){

        setIsLoggedIn(true);
      }
    }
  }, [currentUser, isLoading]);



  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      {(isLoggedIn === false) && <LogoutLayout>{props.children}</LogoutLayout>}
      {isLoggedIn && <LoginLayout>{props.children}</LoginLayout>}
    </>
  );
};

export default ExploreLayout;
