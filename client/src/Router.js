import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, TeamDetails, PlayerDetails, AllPlayers } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/players"} component={AllPlayers} />
          <Route exact path={"/team/:id"} component={TeamDetails} />
          <Route exact path={"/players/:id"} component={PlayerDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
