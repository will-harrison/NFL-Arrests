module.exports = {
  method: "GET",
  path: "/api/teams",
  handler: function (request, reply) {
    this.models.Team
      .get()
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}