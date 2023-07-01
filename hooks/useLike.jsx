import { useCallback, useMemo, useState } from 'react';
import useCurrentUser from './useCurrentUser';
import usePost from './usePost';
import usePosts from './usePosts';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useLike = ({ postId, userId }) => {
  const { currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);

  const [likeCount, setLikeCount] = useState(fetchedPost?.likedIds?.length || 0);

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
        toast.error('Unliked post');
        setLikeCount(likeCount - 1);
      } else {
        toast.success('Liked post');
        setLikeCount(likeCount + 1);
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to like post');
    }
  }, [currentUser, hasLiked, likeCount, mutateFetchedPosts, mutateFetchedPost, postId]);

  return {
    hasLiked,
    likeCount,
    toggleLike,
  };
};

export default useLike;
