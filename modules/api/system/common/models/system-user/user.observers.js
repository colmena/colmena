'use strict'

module.exports = function(SystemUser) {
  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })
  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.instance && ctx.isNewInstancex) {
      console.log(ctx.instance)
      // ctx.instance.username = ctx.instance.email
    }
    next()
  })
}
