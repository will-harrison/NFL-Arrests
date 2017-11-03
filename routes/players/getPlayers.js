module.exports = {
  method: "GET",
  path: "/api/playerss",
  handler: function (request, reply) {
    this.models.Player
      .get()
      .then(res => reply(res))
      .catch(err => reply(err));
  }
}