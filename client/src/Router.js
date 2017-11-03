import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, TeamDetails, PlayerDetails } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
