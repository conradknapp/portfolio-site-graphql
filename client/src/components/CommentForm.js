import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <form className="comment-form">
        <input placeholder="Add a comment" />
      </form>
    );
  }
}
