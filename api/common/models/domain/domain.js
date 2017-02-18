'use strict'

module.exports = function(Domain) {

  // Observe new domain creation to register a storage container
  Domain.observe('after save', function(ctx, next) {
    if (ctx.instance && ctx.isNewInstance) {
      Domain.app.models.Container
        .findOrCreate(ctx.instance.id)
        .then(() => next())
        .catch(err => next(err))
    } else {
      return next()
    }
  });

  // Observe new domain delete to remove the storage container
  Domain.observe('before delete', function(ctx, next) {
    const domainId = ctx.where.id

    if (domainId) {
      Domain.app.models.Container
        .destroy(domainId)
        .then(() => next())
        .catch(err => next(err))
    } else {
      return next()
    }
  })

  Domain.prototype.importFileByUrl = function importFileByUrl(url, fileName) {
    return Domain.app.models.Container.importUrl(url, this.id, fileName)
  }

}
