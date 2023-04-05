import ExploreLayout from "./ExploreLayout";

const withExploreLayout = (PageComponent) => {
  const WrappedPage = (pageProps) => (
    <ExploreLayout>
      <PageComponent {...pageProps} />
    </ExploreLayout>
  );
  return WrappedPage;
};

export default withExploreLayout;
