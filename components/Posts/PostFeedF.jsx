import React from 'react';
import usePosts from '@/hooks/usePosts';
import useCurrentUser from '@/hooks/useCurrentUser';
import PostItem from './PostItem';

const PostFeedF = () => {
  const { currentUser } = useCurrentUser();
  const { data: posts } = usePosts();

  const filteredPosts = currentUser && posts ? posts.filter(
        (post) =>
          currentUser.followingIds.includes(post.user.id) &&
          post.user.id !== currentUser.id
      )
    : [];

  return (
    <div className='text-white'>
      {filteredPosts.map((post) => (
        <PostItem userId={post.user.id} key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostFeedF;
