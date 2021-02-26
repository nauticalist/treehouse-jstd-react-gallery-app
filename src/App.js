import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/search/:query" component={Gallery} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
