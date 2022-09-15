import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
      { /* story */ }
      { /* create post */ }
      <CreatePost />
      { /* posts */ }
      <Post />
    </div>
  );
}

export default Feed;