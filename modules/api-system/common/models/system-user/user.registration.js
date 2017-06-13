'use strict';

const config = require('config')
const log = require('@colmena/logger')

module.exports = function(SystemUser) {

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
    SystemUser.settings.acls.push({
      principalType: 'ROLE',
      principalId: '$unauthenticated',
      permission: enabled ? 'ALLOW' : 'DENY',
      property: 'create',
    })
  }

  configureUserRegistration()

}
