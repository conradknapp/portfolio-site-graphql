import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Header from "./components/Header.js";
import Observer from "@researchgate/react-intersection-observer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: ""
    };

    this.renderPosts = this.renderPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    if (event.isIntersecting) {
      event.target.className = "fadeIn";
      event.target.src = event.target.dataset.src;
    }
  };

  renderPosts() {
    return this.props.data.getAllPosts.map(({ _id, title, imageUrl }) => {
      return (
        <Observer
          key={_id}
          onChange={this.handleChange}
          rootMargin="0% 0% -25%"
          onlyOnce
        >
          <img className={this.state.class} data-src={imageUrl} alt={title} />
        </Observer>
      );
    });
  }

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
