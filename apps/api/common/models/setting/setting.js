'use strict'

module.exports = function(Setting) {
  Setting.observe('loaded', (ctx, next) => {
    if (ctx.instance && ctx.instance.type) {
      switch (ctx.instance.type) {
        case 'boolean':
          ctx.instance.value = Boolean(String(ctx.instance.value) === 'true')
          break
        case 'integer':
          ctx.instance.value = parseInt(ctx.instance.value)
          break
      }
    }
    return next()
  })
}
