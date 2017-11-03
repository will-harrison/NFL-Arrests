const thinky = require("thinky");
const config = require('../config');

const db = thinky({
  db: config.db.name,
  port: config.db.port,
  host: config.db.host,
});

const Team = require("./team")(db);
const Player = require("./player")(db);

Team.filter({}).then(teams => {
  Player.filter({}).then(players => {
    players.map(p => {
      let team = teams.find(t => t.Team === p.Team);

      if (!team) return;

      team.addRelation('players', { id: p.id })
    })
  })
})

Team.hasAndBelongsToMany(Player, "players", "id", "id");

module.exports = {
  Team: Team,
  Player: Player
};