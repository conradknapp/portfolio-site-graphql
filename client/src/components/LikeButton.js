import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import ThumbsUp from "./ThumbsUp";

class LikeButton extends React.Component {
  state = {
    clicked: false
  };

  handleClick = event => {
    event.preventDefault();
    this.props.mutate({
      variables: { _id: this.props.id },
      optimisticResponse: {
        __typename: "Mutation",
        likePost: {
          _id: this.props.id,
          __typename: "Post",
          likes: this.props.likes + 1
        }
      }
    });

    this.setState({ clicked: true });
    setTimeout(() => this.setState({ clicked: false }), 200);
  };

  render() {
    return (
      <div onClick={event => this.handleClick(event)} className="Button__Like">
        <ThumbsUp />
        <span
          className={
            this.state.clicked
              ? "Button__Like--Count__Show"
              : "Button__Like--Count"
          }
        >
          {this.props.likes}
        </span>
      </div>
    );
  }
}

const mutation = gql`
  mutation likePost($_id: String!) {
    likePost(_id: $_id) {
      _id
      likes
    }
  }
`;

export default graphql(mutation)(LikeButton);
