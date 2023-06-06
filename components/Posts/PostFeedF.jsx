import usePosts from '@/hooks/usePosts'
import React from 'react'
import PostItem from './PostItem'

const PostFeedF = ({userId}) => {
    const {data:posts=[]} = usePosts(userId)
  return (
    <div className='text-white'>{posts.map((post) => (
        <PostItem userId={userId} key={post.id} data={post}/>
    ))}</div>
  )
}

export default PostFeedF