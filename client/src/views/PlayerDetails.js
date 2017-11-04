import React, { Component } from "react";
import api from "../api";
import { Segment, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PlayerDetails extends Component {
  constructor() {
    super();

    this.state = {
      player: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.players.getById(id).then(data => {
      this.setState(state => {
        return {
          player: data
        };
      });
    });
  }

  render() {
    let { player } = this.state;
    return (
      <div>
        <Segment style={{ textAlign: "center" }} inverted>
          <Header style={{ height: 70, fontSize: 40 }} inverted color="grey">
            <Image
              style={{ height: 70, width: 70 }}
              src={
                "https://vignette.wikia.nocookie.net/looneytunes/images/4/49/NFL-logo.png/revision/latest?cb=20140711021414"
              }
            />
            Player Details
          </Header>
        </Segment>

        <div style={{ textAlign: "center" }}>
          <h1>{player.Name}</h1>
          <div style={{ fontSize: 18 }}>
            {player.Team_city} {player.Team_name}
          </div>

          <div>{player.Position}</div>
          <br />
          <div style={{ fontSize: 22 }}>{player.arrest_count} Arrests</div>
        </div>
      </div>
    );
  }
}

export default PlayerDetails;
