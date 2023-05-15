import LoginModal from '@/components/Modals/LoginModal';
import '../styles/globals.css';
import Layout from '@/components/explore/Layout';
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
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
