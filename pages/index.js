export default function Home() {
  return;
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
