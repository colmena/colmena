'use strict'
const loopback = require('loopback')

module.exports = function enableAuthentication(server) {
  // Enable authentication
  server.enableAuth()

  // Configure Auth middleware
  server.middleware(
    'auth',
    loopback.token({
      model: server.models.SystemAccessToken,
      currentUserLiteral: 'me',
    })
  )

  server.on('started', () => {
    // Programmatically create the 'roles' relation
    server.models.SystemUser.hasMany(server.models.SystemRole, {
      as: 'roles',
      foreignKey: 'principalId',
      through: server.models.SystemRoleMapping,
    })
  })
}
