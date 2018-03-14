import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

class Post extends Component {
  render() {
    const { postById } = this.props.data;
    console.log(this.props.data);

    if (!postById) {
      return <div>Loading</div>;
    }

    return (
      <main className="post">
        <img
          className="post-image"
          src={postById.imageUrl}
          alt={postById.title}
        />
        <Link to="/">Home</Link>
        <h1 className="post-title">{postById.title}</h1>
        <p className="post-content">{postById.content}</p>
        <CommentForm id={this.props.match.params.id} likes={postById.likes} />
        <CommentList comments={postById.comments} />
      </main>
    );
  }
}

const query = gql`
  query getPost($_id: String!) {
    postById(_id: $_id) {
      _id
      title
      imageUrl
      content
      likes
      comments
    }
  }
`;

export default graphql(query, {
  options: props => {
    return { variables: { _id: props.match.params.id } };
  }
})(Post);
