import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import './Feed.css';
import { colRef } from './firebase';
import { onSnapshot, orderBy, query } from 'firebase/firestore';

function Feed(props) {
  const [ posts, setPosts ] = useState();

  useEffect(() => {
    /* reference from
     * https://www.youtube.com/watch?v=rfQ2F8kQEUg&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=7
     * https://firebase.google.com/docs/firestore/query-data/order-limit-data
     */
    const q = query(colRef, orderBy('timestamp', 'desc'));
    onSnapshot(q, snapshot => {
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