'use strict'

module.exports = function(SystemUser) {
  // Set the username property to email
  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })

  // Assign the system-user role to each new user
  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance && ctx.instance) {
      ctx.instance.addRole('system-user')
    }
    next()
  })
}
