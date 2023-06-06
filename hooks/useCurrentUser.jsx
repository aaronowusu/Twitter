import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
import { useSession } from 'next-auth/react';

const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  const { data, error, mutate } = useSWR(
    isAuthenticated ? '/api/current' : null,
    fetcher
  );

  const isAuthLoading = status === 'loading';
  const isLoading = isAuthLoading || (!data && isAuthenticated);

  return {
    currentUser: data,
    isLoading,
    error,
    mutate
  };
};

export default useCurrentUser;
