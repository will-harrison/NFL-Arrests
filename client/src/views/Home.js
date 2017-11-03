import React, { Component } from "react";
import api from "../api";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      teams: [
        {
          Team: "MIN",
          Team_preffered_name: "Minnesota Vikings",
          Team_name: "Vikings",
          Team_city: "Minneapolis",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC North",
          Team_logo_id: "18",
          arrest_count: "49"
        },
        {
          Team: "DEN",
          Team_preffered_name: "Denver Broncos",
          Team_name: "Broncos",
          Team_city: "Denver",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC West",
          Team_logo_id: "10",
          arrest_count: "48"
        },
        {
          Team: "CIN",
          Team_preffered_name: "Cincinnati Bengals",
          Team_name: "Bengals",
          Team_city: "Cincinnati",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC North",
          Team_logo_id: "7",
          arrest_count: "44"
        }
      ]
    };
  }

  componentDidMount() {
    api.teams.getAll().then(data => {
      teams: [];
      this.setState(state => {
        return {
          teams: teams
        };
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Team List</h1>
        {this.state.teams.map(team => <div>{team.Team_city}</div>)}
      </div>
    );
  }
}

export default Home;
