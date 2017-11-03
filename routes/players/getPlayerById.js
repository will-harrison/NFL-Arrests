module.exports = {
  method: "GET",
  path: "/api/teams/{playerId}",
  handler: function (request, reply) {
    let { teamId } = request.params;
    this.models.Player
      .get(playerId)
      .getJoin({ players: true })
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}