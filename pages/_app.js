import LoginModal from '@/components/Modals/LoginModal';
import '../styles/globals.css';
import Layout from '@/components/explore/Layout';
import RegistrationModal from '@/components/Modals/RegistrationModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme using the createTheme function
const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <RegistrationModal />
        <LoginModal />
        <Layout>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
