'use strict'

const { hasManyRelation } = require('@colmena/api-helpers/src/relation-mixin')

module.exports = (Model, options) => {
  options.targetModel = 'StorageFile'
  options.foreignKey = options.foreignKey || 'storageFileId'
  options.required = options.required || false
  return hasManyRelation(Model, options)
}
