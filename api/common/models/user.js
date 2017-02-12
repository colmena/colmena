'use strict'

const config = require('config')

module.exports = function (User) {

  // This does not work on bulk create: https://github.com/strongloop/loopback-datasource-juggler/issues/793
  User.validatesUniquenessOf('email', { scopedTo: [ 'realm' ], message: 'Email is not unique within this realm' })

  function getRegistrationEnabled () {
    return (config.has('settings.registrationEnabled') && config.get('settings.registrationEnabled') !== false)
  }

  function configureUserRegistration () {
    const enabled = getRegistrationEnabled()

    if (enabled) {
      console.log('User: registration enabled')
    } else {
      console.log('User: registration disabled')
    }

    // FIXME: I wish there was a way to do this outside of the Model (like a boot script)
    User.settings.acls.push({
      principalType: 'ROLE',
      principalId: '$unauthenticated',
      permission: enabled ? 'ALLOW' : 'DENY',
      property: 'create',
    })
  }

  configureUserRegistration()

  User.observe('before save', function setUsernameIfEmpty (ctx, next) {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })

  /**
   * Method that retrieves all the roles in the system
   * @returns boolean
   */
  User.getAllRoleNames = function getAllRoleNames() {
    return User.app.models.Role
      .find()
      .then(roles => roles.map(role => role.name))
  }

  /**
   * Get the roles for this User.
   * @returns {Object} A map of all roles of this user
   */
  User.prototype.info = function info() {
    const result = {
      user: this,
      roles: {},
    }
    let allRoleNames = []
    let userRoleNames = []

    return this.roles
      .getAsync()
      .then(userRoles => userRoles.map(userRole => userRole.name))
      .then(res => (userRoleNames = res))
      .then(() => User.getAllRoleNames())
      .then(res => (allRoleNames = res))
      .then(() => (
        result.roles = {
          assigned: allRoleNames.filter(name => userRoleNames.indexOf(name) !== -1),
          unassigned: allRoleNames.filter(name => userRoleNames.indexOf(name) === -1),
        }
      ))
      .then(() => result)
  }
}
