const thinky = require("thinky");
const config = require('../config');

const db = thinky({
  name: config.db.name,
  port: config.db.port,
  host: config.db.host,
});

const Team = require("./team")(db);
const Player = require("./player")(db);

Team.hasAndBelongsToMany(Player, "players", "id", "id");
Player.hasAndBelongsToMany(Team, "teams", "id", "id");

module.exports = {
  Team: Team,
  Player: Player
};