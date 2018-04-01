import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul className="Comment__List">
      {comments.map((comment, i) => <Comment key={i} comment={comment} />)}
    </ul>
  );
};

export default CommentList;
