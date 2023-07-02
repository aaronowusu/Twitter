import { Divider } from '@mui/material';
import React from 'react';
import CommentItem from './CommentItem';

const CommentFeed = ({ comments }) => {
  return (
    <>
      <Divider className='dark:bg-widget-border ' />
      {comments?.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
