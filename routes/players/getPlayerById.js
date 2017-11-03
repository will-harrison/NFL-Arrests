module.exports = {
  method: "GET",
  path: "/api/players/{playerId}",
  handler: function (request, reply) {
    let { playerId } = request.params;
    this.models.Player
      .get(playerId)
      .then(res => reply(res))
      .catch(err => {
        console.log(err)
        reply(err)
      });
  }
}