import React from 'react'
import usePosts from '@/hooks/usePosts'
import PostItem from './PostItem'

const PostFeedFY = ({userId}) => {

  const { data: posts = [] } = usePosts(userId);
    return (
      <div className='text-white'>{posts.map((post) => (
          <PostItem userId={userId} key={post.id} data={post}/>
      ))}</div>
    )
  
}

export default PostFeedFY