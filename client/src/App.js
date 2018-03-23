import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Header from "./components/Header.js";
import Observer from "@researchgate/react-intersection-observer";

import "./App.css";

class App extends Component {
  state = {
    class: "",
    isHovered: false
  };

  handleHover = event => {
    this.setState({ isHovered: !this.state.isHovered });
    this.state.isHovered ? event.target.pause() : event.target.play();
  };

  handleChange = event => {
    if (event.isIntersecting) {
      event.target.className = "fadeIn";
      event.target.src = event.target.dataset.src;
    }
  };

  renderPosts = () => {
    return this.props.data.getAllPosts.map(({ _id, title, imageUrl }) => {
      return (
        <Observer
          key={_id}
          onChange={this.handleChange}
          rootMargin="0% 0% -25%"
          onlyOnce
        >
          <video
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={() => this.props.history.push(`/posts/${_id}`)}
            className={this.state.class}
            data-src={imageUrl}
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt={title}
          />
        </Observer>
      );
    });
  };

  render() {
    if (this.props.data.loading) {
      return <div>loading...</div>;
    }
    return (
      <main className="view">
        <Header />
        <section className="image-container">{this.renderPosts()}</section>
      </main>
    );
  }
}

const query = gql`
  {
    getAllPosts {
      _id
      title
      content
      imageUrl
    }
  }
`;

export default graphql(query)(App);
