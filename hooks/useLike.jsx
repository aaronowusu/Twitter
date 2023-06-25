import { useCallback, useMemo } from 'react';
import useCurrentUser from './useCurrentUser';
import usePost from './usePost';
import usePosts from './usePosts';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useLike = ({ postId, userId }) => {
  const { currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost?.likedIds]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return;
    }

    try {
      let request;
      if (hasLiked) {
        request = () =>
          axios.delete('/api/like', {
            data: {
              postId,
            },
          });
      } else {
        request = () =>
          axios.post('/api/like', {
            postId,
          });
      }
      await request();
      mutateFetchedPost();
      mutateFetchedPosts();

      if (hasLiked) {
        toast.success('Unliked post');
      }
      else{
        toast.success('Liked post');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to like post');
    }
  }, [currentUser, hasLiked, mutateFetchedPosts, mutateFetchedPost, postId]);

  return {
    hasLiked,
    toggleLike,
  };
};

export default useLike;
