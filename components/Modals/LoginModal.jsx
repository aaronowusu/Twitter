import React, { useCallback, useEffect, useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';
import SocialButton from '../Widget/SocialButton';
import useLoginModal from '@/hooks/useLoginModal';
import useRegistrationModal from '@/hooks/useRegistrationModal';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import SpinnerModal from './SpinnerModal';

function LoginModal() {
  const loginModal = useLoginModal();
  const router = useRouter();
  const registrationModal = useRegistrationModal();
  const [isDisabled, setDisabled] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const switchModalHandler = useCallback(() => {
    loginModal.close();
    registrationModal.open();
  }, [loginModal, registrationModal]);

  const closeHandler = useCallback(() => {
    loginModal.close();
  }, [loginModal]);

  const buttonHandler = useCallback(() => {
    if (emailRef.current.value && passwordRef.current.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailRef, passwordRef]);

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const spinnerHandler = () => {
        if (isLoading) {
          return <SpinnerModal />;
        } else {
          return null;
        }
      };

      try {
        setIsLoading(true);
        {
          isLoading && spinnerHandler();
        }
        loginModal.close();
        const result = await signIn('credentials', {
          email,
          password,
          callbackUrl: '/home',
          redirect: false,
        });
        if (result?.error) {
          throw new Error(result.error);
        }

        await router.push(result?.url || '/home');
        setIsLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    },
    [loginModal, isLoading, router]
  );

  useEffect(() => {
    if (loginModal.isOpen || registrationModal.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loginModal, registrationModal]);

  if (!loginModal.isOpen) {
    return null;
  }

  return (
    <>
      <div className=' backdrop flex justify-center items-center fixed inset-0  z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70'>
        <div className='relative w-full h-full md:w-[600px] md:h-[650px] bg-black rounded-xl'>
          <div className='top_section flex px-4 h-[53px] w-full justify-between items-center'>
            <div className='close_button basis-1/2 '>
              <button
                onClick={closeHandler}
                className='focus:outline-none hover:opacity-80 transition items-center'
              >
                <AiOutlineClose className='text-white text-2xl' size={20} />
              </button>
            </div>
            <div className='logo '>
              <Logo />
            </div>
            <div className='basis-1/2'></div>
          </div>
          <div className='w-full mx-auto flex flex-col'>
            <div className='min-w-[364px] max-w-[364px] px-8 m-auto'>
              <div className='header'>
                <div className='my-5'>
                  <h1 className='font-bold text-2xl text-white leading-8'>
                    Sign in to Twitter
                  </h1>
                </div>
              </div>
              <div className='google_signin w-[300px] mx-auto my-3 h-[40px]'>
                <SocialButton src='/google.png' className='w-full'>
                  Sign in with Google
                </SocialButton>
              </div>
              <div className='apple_signin w-[300px] mx-auto my-3 h-[40px] min-w-[35px] min-h-[35px] font-extrabold'>
                <SocialButton src='/apple.png' className='w-full'>
                  Sign in with Apple
                </SocialButton>
              </div>

              <div className='divider'>
                <div className='flex items-center justify-center'>
                  <div className='border-b border-search-text-color w-full'></div>
                  <div className='dark:text-white mx-2 text-base'>or</div>
                  <div className='border-b border-search-text-color w-full'></div>
                </div>
              </div>
              <form onSubmit={submitHandler}>
                <div className='email w-full px-0 py-2'>
                  <label className='text-sm text-search-text-color font-bold'>
                    Email Address
                  </label>
                  <input
                    type='text'
                    ref={emailRef}
                    className='w-full bg-transparent border border-search-text-color text-white text-base  focus:outline-none focus:border-twitter-blue p-4 rounded-lg'
                    placeholder='name@domain.com'
                    onChange={buttonHandler}
                  />
                </div>
                <div className='password w-full px-0 py-2'>
                  <label className='text-sm text-search-text-color font-bold'>
                    Password
                  </label>

                  <input
                    type='password'
                    ref={passwordRef}
                    className='w-full bg-transparent border border-search-text-color text-white text-base  focus:outline-none focus:border-twitter-blue p-4 rounded-lg'
                    placeholder='Enter your password'
                    onChange={buttonHandler}
                  />
                  <div className='forgot_password w-full' onClick={() => toast.error('This feature is not available yet')}>
                    <a href='#' className='text-sm text-twitter-blue'>
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className='login_button w-full px-0 py-2'>
                  <button
                    disabled={isDisabled}
                    type='submit'
                    className={`w-full bg-white text-black font-bold text-base rounded-full px-4 py-3 focus:outline-none ${
                      isDisabled
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:opacity-80 transition'
                    }`}
                  >
                    Log in
                  </button>
                </div>
                <div className='sign_up w-full'>
                  <span className='text-sm text-search-text-color'>
                    Don&apos;t have an account?{' '}
                  </span>
                  <a
                    href='#'
                    className='text-sm text-twitter-blue'
                    onClick={switchModalHandler}
                  >
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
