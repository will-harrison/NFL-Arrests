import React, { Component } from "react";
import api from "../api";

class TeamDetails extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.teams.getById(id).then(data => {});
  }

  render() {
    return (
      <div>
        <h1>Team Details</h1>
      </div>
    );
  }
}

export default TeamDetails;
