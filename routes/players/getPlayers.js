module.exports = {
  method: "GET",
  path: "/api/players",
  handler: function (request, reply) {
    this.models.Player
      .get()
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}