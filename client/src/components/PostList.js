import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  async function fetchPosts() {
    const res = await axios.get('http://localhost:4002/posts');
    console.log(res.data);
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((p) => (
    <div
      className='card'
      style={{ width: '30%', marginBottom: '20px' }}
      key={p.id}
    >
      <h3>{p.title}</h3>
      <CommentCreate postId={p.id} />
      <CommentList comments={p.comments} />
    </div>
  ));

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {posts ? renderedPosts : <p>No posts to show.</p>}
    </div>
  );
};

export default PostList;
