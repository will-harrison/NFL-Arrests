import React, { Component } from "react";
import api from "../api";
import { Button, Segment, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    api.teams.getAll().then(data => {
      this.setState(state => {
        return {
          teams: data
        };
      });
    });
  }

  render() {
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
            Teams
          </Header>
        </Segment>
        <div
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Button size={"small"} as={Link} to={"/players"}>
            All Players
          </Button>
          <br />
          <table>
            <tbody>
              {this.state.teams
                .sort((a, b) => {
                  return b.players.length - a.players.length;
                })
                .map(team => (
                  <tr>
                    <td>
                      <Link style={{ fontSize: 18 }} to={`/team/${team.id}`}>
                        {team.Team_preffered_name}
                      </Link>
                    </td>
                    <td> {team.players.length} Players Arrested</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
