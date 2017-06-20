'use strict'

module.exports = function(SystemUser) {
  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })
}
