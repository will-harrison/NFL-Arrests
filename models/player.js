module.exports = (db) => {
  const type = db.type;
  const Player = db.createModel("Player", {
    Name: type.string(),
    Team: type.string(),
    Team_name: type.string(),
    Position: type.string(),
    arrest_count: type.string()
  });
  return Player;
}