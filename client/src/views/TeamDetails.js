import React, { Component } from "react";
import api from "../api";
import { Segment, Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TeamDetails extends Component {
  constructor() {
    super();

    this.state = {
      team: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.teams.getById(id).then(data => {
      this.setState(state => {
        return {
          team: data
        };
      });
    });
  }

  render() {
    let { team } = this.state;
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
            Team Details
          </Header>
        </Segment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "1.3rem",
            padding: 10
          }}
        >
          <h1>{team.Team_preffered_name}</h1>
          <h2>Details</h2>
          <div>{team.Team_Conference_Division}</div>
          <div>{team.arrest_count} Arrests</div>
          <hr />
          <h2>Criminals</h2>
          <table>
            <tbody>
              {team.players &&
                team.players
                  .sort((a, b) => {
                    return b.arrest_count - a.arrest_count;
                  })
                  .map(player => (
                    <tr>
                      <td>
                        <Link to={`/players/${player.id}`}>{player.Name}</Link>
                      </td>
                      <td>
                        <span>{player.arrest_count} Arrests</span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TeamDetails;
