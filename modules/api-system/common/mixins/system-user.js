'use strict'

const { relationMixin } = require('@colmena/api-helpers/src/relation-mixin')

module.exports = (Model, options) => {
  options.targetModel = 'SystemUser'
  options.foreignKey = options.foreignKey || 'systemUserId'
  options.required = options.required || false
  return relationMixin(Model, options)
}
