module.exports = (db) => {
  const type = db.type;
  const Team = db.createModel("Team", {
    Team: type.string(),
    Team_preffered_name: type.string(),
    Team_name: type.string(),
    Team_city: type.string(),
    Team_Conference: type.string(),
    Team_Conference_Division: type.string(),
    Team_logo_id: type.string(),
    arrest_count: type.string(),
  });
  return Team;
}