import React, { Component } from "react";

export default class CommentList extends Component {
  render() {
    return (
      <ul className="comment-list">
        {this.props.comments.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
    );
  }
}
