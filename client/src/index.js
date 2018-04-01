import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import Post from "./components/Post";
import About from "./components/About";

import registerServiceWorker from "./registerServiceWorker";

const httpLink = new HttpLink({ uri: "http://localhost:3060/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
