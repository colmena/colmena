'use strict'

const config = require('config')
const log = require('@colmena/logger')

module.exports = function(SystemUser) {
  const isRegistrationEnabled = () =>
    config.has('settings.registrationEnabled') &&
    config.get('settings.registrationEnabled') !== false

  const setCreateAcl = enabled =>
    SystemUser.settings.acls.push({
      principalType: 'ROLE',
      principalId: '$unauthenticated',
      permission: enabled ? 'ALLOW' : 'DENY',
      property: 'create',
    })

  const configureRegistration = () => {
    if (isRegistrationEnabled()) {
      log.cyan.b('[system-user] User registration enabled')
      return setCreateAcl(true)
    }
    log.cyan.b('[system-user] User registration disabled')
    return setCreateAcl(false)
  }

  SystemUser.app.once('booted', () => configureRegistration())
}
