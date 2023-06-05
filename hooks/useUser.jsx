import useSWR from 'swr';
import fetcher from '@/libs/fetcher';


const useUser = (userId) => {
 
  const { data, error, isLoading, mutate } = useSWR( userId ?`/api/users/${userId}`:'', fetcher);



  return {
   data,
    isLoading,
    error,
    mutate,
  };
};

export default useUser;
