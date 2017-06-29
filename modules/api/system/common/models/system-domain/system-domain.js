'use strict'

module.exports = function(SystemDomain) {
  // Observe new domain creation to register a storage container
  SystemDomain.observe('after save', (ctx, next) => {
    if (ctx.instance && ctx.isNewInstance) {
      ctx.instance
        .init()
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

  SystemDomain.prototype.importFileByUrl = function importFileByUrl(
    url,
    fileName
  ) {
    return SystemDomain.app.models[this.storageContainerName()].importUrl(
      url,
      this.storageContainerName(),
      this.id,
      fileName
    )
  }
}
