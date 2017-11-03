import React, { Component } from "react";
import api from "../api";
import { Button, Segment, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        },
        {
          Team: "TB",
          Team_preffered_name: "Tampa Bay Buccaneers",
          Team_name: "Buccaneers",
          Team_city: "Tampa Bay",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC South",
          Team_logo_id: "30",
          arrest_count: "36"
        },
        {
          Team: "JAC",
          Team_preffered_name: "Jacksonville Jaguars",
          Team_name: "Jaguars",
          Team_city: "Jacksonville",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC South",
          Team_logo_id: "15",
          arrest_count: "36"
        },
        {
          Team: "TEN",
          Team_preffered_name: "Tennessee Titans",
          Team_name: "Titans",
          Team_city: "Nashville",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC South",
          Team_logo_id: "31",
          arrest_count: "36"
        },
        {
          Team: "IND",
          Team_preffered_name: "Indianapolis Colts",
          Team_name: "Colts",
          Team_city: "Indianapolis",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC South",
          Team_logo_id: "14",
          arrest_count: "35"
        },
        {
          Team: "CLE",
          Team_preffered_name: "Cleveland Browns",
          Team_name: "Browns",
          Team_city: "Cleveland",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC North",
          Team_logo_id: "8",
          arrest_count: "34"
        },
        {
          Team: "KC",
          Team_preffered_name: "Kansas City Chiefs",
          Team_name: "Chiefs",
          Team_city: "Kansas City",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC West",
          Team_logo_id: "16",
          arrest_count: "32"
        },
        {
          Team: "CHI",
          Team_preffered_name: "Chicago Bears",
          Team_name: "Bears",
          Team_city: "Chicago",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC North",
          Team_logo_id: "6",
          arrest_count: "32"
        },
        {
          Team: "MIA",
          Team_preffered_name: "Miami Dolphins",
          Team_name: "Dolphins",
          Team_city: "Miami",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC East",
          Team_logo_id: "17",
          arrest_count: "31"
        },
        {
          Team: "LAC",
          Team_preffered_name: "Los Angeles Chargers",
          Team_name: "Chargers",
          Team_city: "Los Angeles",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC West",
          Team_logo_id: "26",
          arrest_count: "27"
        },
        {
          Team: "BAL",
          Team_preffered_name: "Baltimore Ravens",
          Team_name: "Ravens",
          Team_city: "Baltimore",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC North",
          Team_logo_id: "3",
          arrest_count: "27"
        },
        {
          Team: "SEA",
          Team_preffered_name: "Seattle Seahawks",
          Team_name: "Seahawks",
          Team_city: "Seattle",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC West",
          Team_logo_id: "28",
          arrest_count: "27"
        },
        {
          Team: "NO",
          Team_preffered_name: "New Orleans Saints",
          Team_name: "Saints",
          Team_city: "New Orleans",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC South",
          Team_logo_id: "20",
          arrest_count: "26"
        },
        {
          Team: "SF",
          Team_preffered_name: "San Francisco 49ers",
          Team_name: "49ers",
          Team_city: "San Francisco",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC West",
          Team_logo_id: "27",
          arrest_count: "25"
        },
        {
          Team: "PIT",
          Team_preffered_name: "Pittsburgh Steelers",
          Team_name: "Steelers",
          Team_city: "Pittsburgh",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC North",
          Team_logo_id: "25",
          arrest_count: "25"
        },
        {
          Team: "GB",
          Team_preffered_name: "Green Bay Packers",
          Team_name: "Packers",
          Team_city: "Green Bay",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC North",
          Team_logo_id: "12",
          arrest_count: "24"
        },
        {
          Team: "ARI",
          Team_preffered_name: "Arizona Cardinals",
          Team_name: "Cardinals",
          Team_city: "Phoenix",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC West",
          Team_logo_id: "1",
          arrest_count: "22"
        },
        {
          Team: "NYJ",
          Team_preffered_name: "New York Jets",
          Team_name: "Jets",
          Team_city: "New York",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC East",
          Team_logo_id: "22",
          arrest_count: "22"
        },
        {
          Team: "WAS",
          Team_preffered_name: "Washington Redskins",
          Team_name: "Redskins",
          Team_city: "Washington DC",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC East",
          Team_logo_id: "32",
          arrest_count: "22"
        },
        {
          Team: "OAK",
          Team_preffered_name: "Oakland Raiders",
          Team_name: "Raiders",
          Team_city: "Oakland",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC West",
          Team_logo_id: "23",
          arrest_count: "22"
        },
        {
          Team: "CAR",
          Team_preffered_name: "Carolina Panthers",
          Team_name: "Panthers",
          Team_city: "Charlotte",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC South",
          Team_logo_id: "5",
          arrest_count: "22"
        },
        {
          Team: "ATL",
          Team_preffered_name: "Atlanta Falcons",
          Team_name: "Falcons",
          Team_city: "Atlanta",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC South",
          Team_logo_id: "2",
          arrest_count: "21"
        },
        {
          Team: "NE",
          Team_preffered_name: "New England Patriots",
          Team_name: "Patriots",
          Team_city: "Boston",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC East",
          Team_logo_id: "19",
          arrest_count: "20"
        },
        {
          Team: "BUF",
          Team_preffered_name: "Buffalo Bills",
          Team_name: "Buffalo Bills",
          Team_city: "Buffalo",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC East",
          Team_logo_id: "4",
          arrest_count: "20"
        },
        {
          Team: "DAL",
          Team_preffered_name: "Dallas Cowboys",
          Team_name: "Cowboys",
          Team_city: "Dallas",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC East",
          Team_logo_id: "9",
          arrest_count: "19"
        },
        {
          Team: "DET",
          Team_preffered_name: "Detroit Lions",
          Team_name: "Lions",
          Team_city: "Detroit",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC North",
          Team_logo_id: "11",
          arrest_count: "18"
        },
        {
          Team: "LA",
          Team_preffered_name: "Los Angeles Rams",
          Team_name: "Rams",
          Team_city: "Los Angeles",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC West",
          Team_logo_id: "29",
          arrest_count: "18"
        },
        {
          Team: "PHI",
          Team_preffered_name: "Philadelphia Eagles",
          Team_name: "Eagles",
          Team_city: "Philadelphia",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC East",
          Team_logo_id: "24",
          arrest_count: "18"
        },
        {
          Team: "NYG",
          Team_preffered_name: "New York Giants",
          Team_name: "NY Giants",
          Team_city: "New York",
          Team_Conference: "NFC",
          Team_Conference_Division: "NFC East",
          Team_logo_id: "21",
          arrest_count: "18"
        },
        {
          Team: "HOU",
          Team_preffered_name: "Houston Texans",
          Team_name: "Texans",
          Team_city: "Houston",
          Team_Conference: "AFC",
          Team_Conference_Division: "AFC South",
          Team_logo_id: "13",
          arrest_count: "14"
        }
      ]
    };
  }

  componentDidMount() {
    api.teams.getAll().then(data => {});
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Segment inverted>
          <Header style={{ height: 70, fontSize: 40 }} inverted color="grey">
            <Image
              style={{ height: 70, width: 70 }}
              src={
                "https://vignette.wikia.nocookie.net/looneytunes/images/4/49/NFL-logo.png/revision/latest?cb=20140711021414"
              }
            />
            NFL Criminals
          </Header>
        </Segment>
        <Button size={"small"} as={Link} to={"/players"}>
          All Players
        </Button>
        <br />

        {this.state.teams.map(team => (
          <div>
            <Link style={{ fontSize: 18 }} to={`/team/${team.id}`}>
              {team.Team_preffered_name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
