'use strict'

module.exports = function(SystemSetting) {
  SystemSetting.observe('loaded', (ctx, next) => {
    if (ctx.data && ctx.data.type) {
      switch (ctx.data.type) {
        case 'boolean':
          ctx.data.value = Boolean(String(ctx.data.value) === 'true')
          break
        case 'integer':
          ctx.data.value = parseInt(ctx.data.value)
          break
      }
    }
    return next()
  })
}
