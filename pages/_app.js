import LoginModal from '@/components/Modals/LoginModal';
import '../styles/globals.css';
import ExploreLayout from '@/components/explore/ExploreLayout';
import RegistrationModal from '@/components/Modals/RegistrationModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <RegistrationModal />
        <LoginModal />
        <ExploreLayout>
          <Component {...pageProps} />;
        </ExploreLayout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
