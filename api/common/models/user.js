'use strict'

const config = require('config')

module.exports = function (User) {

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

}
