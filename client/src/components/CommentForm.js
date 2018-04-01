import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { sanitize } from "dompurify";

import LikeButton from "./LikeButton";

class CommentForm extends Component {
  state = {
    content: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          _id: this.props.id
        }
      })
      .then(() => this.setState({ content: "" }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="Comment__Form">
        <input
          placeholder="Add a comment"
          value={this.state.content}
          onChange={event =>
            this.setState({ content: sanitize(event.target.value) })
          }
        />
        <LikeButton likes={this.props.likes} id={this.props.id} />
      </form>
    );
  }
}

const mutation = gql`
  mutation addComment($_id: String!, $content: String!) {
    addComment(_id: $_id, content: $content) {
      _id
      comments
    }
  }
`;

export default graphql(mutation)(CommentForm);
