'use strict'

module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router()
  router.get('/api/v1', server.loopback.status())
  server.use(router)
}
