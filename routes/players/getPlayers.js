module.exports = {
  method: "GET",
  path: "/api/players",
  handler: function (request, reply) {
    this.models.Player
      .filter({})
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}