'use strict';

module.exports = function(SystemDomain) {

  // Observe new domain creation to register a storage container
  SystemDomain.observe('after save', (ctx, next) => {
    if (ctx.instance && ctx.isNewInstance) {
      SystemDomain.app.models.StorageContainer
        .findOrCreate(ctx.instance.id)
        .then(() => next())
        .catch(err => next(err))
    } else {
      return next()
    }
  })

  // Observe new domain delete to remove the storage container
  SystemDomain.observe('before delete', (ctx, next) => {
    const domainId = ctx.where.id

    if (domainId) {
      SystemDomain.app.models.StorageContainer
        .destroy(domainId)
        .then(() => next())
        .catch(err => next(err))
    } else {
      return next()
    }
  })

  SystemDomain.prototype.importFileByUrl = function importFileByUrl(url, fileName) {
    return SystemDomain.app.models.StorageContainer.importUrl(url, this.id, fileName)
  }
}
