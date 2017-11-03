module.exports = {
  method: "GET",
  path: "/api/teams/{teamId}",
  handler: function (request, reply) {
    let { teamId } = request.params;
    this.models.Team
      .get(teamId)
      .getJoin({ players: true })
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}