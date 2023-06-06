import { useCallback, useMemo } from 'react';
import useCurrentUser from './useCurrentUser';
import useUser from './useUser';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useFollow = (userId) => {
  const { currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];
    return list.includes(userId);
  }, [currentUser?.followingIds, userId]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return;
    }

    try {
      let request;
      if (isFollowing) {
        request = axios.delete('/api/follow', {
          data: {
            userId,
          },
        });
      } else {
        request = axios.post('/api/follow', {
          userId,
        });
      }
      await request;
      mutateCurrentUser();
      mutateFetchedUser();
      if (isFollowing) {
        toast.error('Unfollowed');
        return;
      }
      toast.success('Followed');
    } catch (err) {
      console.log(err);
      toast.error('Failed to follow user');
    }
  }, [currentUser, isFollowing, mutateCurrentUser, mutateFetchedUser, userId]);
  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
