'use strict'

const config = require('config')
module.exports = function(StorageFile) {
  const getFileUrl = (container, name) =>
    [config.get('api.url'), 'Containers', container, 'download', name].join('/')

  StorageFile.observe('loaded', (ctx, next) => {
    if (typeof ctx.data === 'undefined') {
      return next()
    }
    ctx.data.url = getFileUrl(ctx.data.container, ctx.data.name)
    next()
  })
}
