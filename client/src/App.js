import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import Header from "./components/Header.js";
import Observer from "@researchgate/react-intersection-observer";

import "./App.css";

class App extends Component {
  state = {
    isHovered: false
  };

  handleHover = event => {
    this.setState({ isHovered: !this.state.isHovered });
    if (this.state.isHovered) {
      event.target.pause();
    } else {
      const playPromise = event.target.play();
      if (playPromise) {
        playPromise.then(() => {}).catch(err => console.warn(err));
      }
    }
  };

  handleChange = event => {
    if (event.isIntersecting) {
      event.target.className = "fade-in";
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
            crossOrigin="anonymous"
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={() => this.props.history.push(`/posts/${_id}`)}
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
      return <div>Loading</div>;
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
