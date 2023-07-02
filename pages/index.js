export default function Home() {
  return;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/explore/tabs/for-you",
      permanent: false,
    },
  };
}
