import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = ({ children }) => {
  return (
    <div className='container'>
      <h1>Blog</h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
