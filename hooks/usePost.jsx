import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const usePost = (postId) => {
  const { data, error, isLoading, mutate } = useSWR(postId ? `/api/posts/${postId}` : null, fetcher);  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default usePost;
