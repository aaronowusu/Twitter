import React from 'react';
import SocialButton from './SocialButton';
import WidgetFooter from './WidgetFooter';

const Widgets = () => {
  return (
    <>
      <div className='hidden md:flex md:flex-[0.5] lg:flex-1  h-screen'>
        <div className='hidden fixed top-4 dark:text-white lg:flex justify-center flex-col'>
          <div className='core mb-4 rounded-xl border ml-4 lg:w-[280px] xl:w-[330px] 2xl:w-[370px] dark:border-widget-border border-[#EFF0F2]'>
            <section className='flex flex-col '>
              <div className='header py-3 px-4'>
                <h2 className='font-extrabold text-xl whitespace-nowrap'>
                  New to Twitter?
                </h2>
              </div>
              <div className='subheader text-xs xl:text-sm text-gray-500 px-4 2xl:whitespace-nowrap'>
                <span className=''>
                  Sign up now to get your own personalized timeline!
                </span>
              </div>
              <div className='buttons  my-4 mx-3'>
                <div className='google_signin '>
                  <SocialButton src='/google.png'>
                    Sign up with Google
                  </SocialButton>
                </div>
                <div className='apple_signin font-extrabold'>
                  <SocialButton src='/apple.png'>
                    Sign up with Apple
                  </SocialButton>
                </div>
                <div className='create_account font-bold'>
                  <button className=' rounded-full w-full bg-white text-black h-[38px] px-2 py-1.5 dark:hover:opacity-80 hover:bg-[#E6E6E6] my-1 border border-[#EFF0F2]'>
                    Create account
                  </button>
                </div>
              </div>
              <div className='text-xs px-4 text-gray-500 mb-4'>
                By signing up, you agree to the{' '}
                <a href='#' className='text-blue-500 hover:underline'>
                  Terms of Service{' '}
                </a>
                and{' '}
                <a href='#' className='text-blue-500 hover:underline'>
                  Privacy Policy{' '}
                </a>
                , including{' '}
                <a href='#' className='text-blue-500 hover:underline'>
                  Cookie Use.
                </a>
              </div>
            </section>
          </div>
          <WidgetFooter />
        </div>
      </div>
    </>
  );
};

export default Widgets;
