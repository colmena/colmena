'use strict'
module.exports = function enableAuthentication(server) {
  // Enable authentication
  server.enableAuth()

  server.on('started', () => {
    // Programmatically create the 'roles' relation
    server.models.SystemUser.hasMany(server.models.SystemRole, {
      as: 'roles',
      foreignKey: 'principalId',
      through: server.models.SystemRoleMapping,
    })
  })
}
