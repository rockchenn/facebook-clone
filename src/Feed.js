import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import './Feed.css';
import { colRef } from './firebase';
import { onSnapshot } from 'firebase/firestore';

function Feed(props) {
  const [ posts, setPosts ] = useState();

  useEffect(() => {
    onSnapshot(colRef, snapshot => {
      setPosts(snapshot.docs.map(doc => {
        const post = doc.data();
        post.id = doc.id;
        return post;
      }));
    });
  });

  return (
    <div className='feed'>
      { /* story */ }
      { /* create post */ }
      <CreatePost name={ props.name } avatar={ props.avatar} />
      { /* posts */ }
      { posts?.map(post => <Post key={ post.id } post={ post } />) }
    </div>
  );
}

export default Feed;