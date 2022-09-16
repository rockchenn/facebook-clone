import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post(props) {
  const post = props?.post;

  return (
    <div className='post'>
        <div className='post__header'>
          <Avatar src={ post?.avatar } sx={{ width: 32, height: 32}} />
          <div>
              <h4>{ post?.name }</h4>
              <p>{ new Date(post?.timestamp?.toDate()).toUTCString() }</p>
          </div>
        </div>
        <div className='post__body'>
            <p>{ post?.message }</p>
            <img src={ post?.image } alt={ post?.image } />
        </div>
    </div>
  );
}

export default Post;