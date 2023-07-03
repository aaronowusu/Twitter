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
  }, [currentUser, userId]);

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

      const response = await request;
      const updatedUser = response.data.updatedUser;

      if (isFollowing) {
        toast.error('Unfollowed ');
      } else {
        toast.success('Followed ');
      }

      mutateCurrentUser();
      mutateFetchedUser();
    } catch (err) {
      console.log(err);
      toast.error('Failed to follow/unfollow user');
    }
  }, [currentUser, isFollowing, mutateCurrentUser, mutateFetchedUser, userId]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
