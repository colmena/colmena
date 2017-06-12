'use strict'

const config = require('config')
const log = require('@colmena/logger')

module.exports = function(User) {
  // This does not work on bulk create: https://github.com/strongloop/loopback-datasource-juggler/issues/793
  User.validatesUniquenessOf('email', {
    scopedTo: ['realm'],
    message: 'Email is not unique within this realm',
  })

  function getRegistrationEnabled() {
    return (
      config.has('settings.registrationEnabled') &&
      config.get('settings.registrationEnabled') !== false
    )
  }

  function configureUserRegistration() {
    const enabled = getRegistrationEnabled()

    if (enabled) {
      log.info('User: registration enabled')
    } else {
      log.info('User: registration disabled')
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

  User.observe('before save', function setUsernameIfEmpty(ctx, next) {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })

  // Set a fullName property on the user prototype
  User.prototype.fullName = function fullName() {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`
    }
    return this.firstName || this.lastName || ''
  }
}
