import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const usePosts = (userId) => {
  const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    revalidateOnMount: true,
  });

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default usePosts;
