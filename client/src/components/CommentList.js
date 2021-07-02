import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((c) => <li key={c.id}>{c.content}</li>);

  return (
    <div>
      {renderedComments ? (
        <ul>{renderedComments}</ul>
      ) : (
        <p>No comments to show.</p>
      )}
    </div>
  );
};

export default CommentList;
