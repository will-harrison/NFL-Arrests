import React, { Component } from "react";
import api from "../api";

class AllPlayers extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          Name: "Kenny Britt",
          Team: "TEN",
          Team_name: "Titans",
          Team_city: "Nashville",
          Position: "WR",
          arrest_count: "7"
        },
        {
          Name: "Chris Henry",
          Team: "CIN",
          Team_name: "Bengals",
          Team_city: "Cincinnati",
          Position: "WR",
          arrest_count: "6"
        },
        {
          Name: "Adam Jones",
          Team: "TEN",
          Team_name: "Titans",
          Team_city: "Nashville",
          Position: "CB",
          arrest_count: "6"
        },
        {
          Name: "Aldon Smith",
          Team: "SF",
          Team_name: "49ers",
          Team_city: "San Francisco",
          Position: "LB",
          arrest_count: "5"
        }
      ]
    };
  }

  componentDidMount() {
    api.players.getAll().then(data => {});
  }

  render() {
    return (
      <div>
        <h1>All Players</h1>
        {this.state.players.map(player => <div>{player.Name}</div>)}
      </div>
    );
  }
}

export default AllPlayers;
