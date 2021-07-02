import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <h2>Create post</h2>
        <div className='form-group'>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
