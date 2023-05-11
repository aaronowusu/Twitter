import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
import { useSession } from 'next-auth/react';

const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  const { data, error, isLoading } = useSWR(
    isAuthenticated ? '/api/current' : null,
    fetcher
  );

  return {
    currentUser: data,
    isLoading,
    error,
  };
};

export default useCurrentUser;
