import LoginModal from '@/components/Modals/LoginModal';
import '../styles/globals.css';
import ExploreLayout from '@/components/explore/ExploreLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <LoginModal isOpen={true} title="Sign in to Twitter"/>
      <ExploreLayout>
        <Component {...pageProps} />;
      </ExploreLayout>

    </>
  );
}

export default MyApp;
