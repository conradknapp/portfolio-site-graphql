import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import { ScaleLoader } from "react-spinners";

class Post extends Component {
  render() {
    const { postById } = this.props.data;

    if (!postById) {
      return (
        <div className="scale-loader">
          <ScaleLoader color={"teal"} />
        </div>
      );
    }

    return (
      <main className="Post">
        <video
          preload="auto"
          className="Post__Video"
          src={postById.imageUrl}
          alt={postById.title}
          autoPlay="true"
          crossOrigin="true"
        />
        <Link to="/">Home</Link>
        <h1 className="Post__Title">{postById.title}</h1>
        <p className="Post__Content">{postById.content}</p>
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
