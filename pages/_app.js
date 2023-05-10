import LoginModal from '@/components/Modals/LoginModal';
import '../styles/globals.css';
import ExploreLayout from '@/components/explore/ExploreLayout';
import RegistrationModal from '@/components/Modals/RegistrationModal';

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <RegistrationModal isOpen={true} /> */}
    <LoginModal />
      <ExploreLayout>
        <Component {...pageProps} />;
      </ExploreLayout>

    </>
  );
}

export default MyApp;
