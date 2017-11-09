'use strict'

const { hasManyRelation } = require('@colmena/api-helpers/src/relation-mixin')

module.exports = (Model, options) => {
  options.targetModel = 'SystemDomain'
  options.foreignKey = options.foreignKey || 'systemDomainId'
  options.required = options.required || false
  return hasManyRelation(Model, options)
}
