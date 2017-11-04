import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { Segment, Header, Image, Button } from "semantic-ui-react";

class AllPlayers extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    api.players.getAll().then(data => {
      this.setState(state => {
        return {
          players: data
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
            All Players
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
          <Button size={"small"} as={Link} to={"/"}>
            Home
          </Button>
          <br />
          <br />
          <table>
            <tbody>
              {this.state.players
                .sort((a, b) => {
                  return b.arrest_count - a.arrest_count;
                })
                .map(player => (
                  <tr>
                    <td>
                      <Link
                        style={{ fontSize: 18 }}
                        to={`/players/${player.id}`}
                      >
                        {player.Name}
                      </Link>
                    </td>
                    <td>
                      <span style={{ margin: "5px 15px" }}>
                        {player.Team_name}
                      </span>
                    </td>
                    <td>
                      <span style={{ margin: "5px 15px" }}>
                        {player.arrest_count} Arrests
                      </span>
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

export default AllPlayers;
