import ExploreHeader from "../components/explore/ExploreLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <ExploreHeader />
      <main></main>
      <footer></footer>
    </>
  );
}

export async function getServerSideProps() {
  // redirect to /explore/tabs/for-you
  return {
    redirect: {
      destination: "/explore/tabs/for-you",
      permanent: false,
    },
  };
}
