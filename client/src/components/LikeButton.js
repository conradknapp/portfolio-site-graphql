import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
        <svg
          fill="none"
          stroke="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="#fff" />
          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
        </svg>
        <span className={this.state.clicked ? "like-count-show" : "like-count"}>
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
