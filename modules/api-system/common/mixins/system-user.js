'use strict'


const { relationMixin } = require('../../lib/relation-mixin')

module.exports = (Model, options) => {
  options.targetModel = 'SystemUser'
  options.foreignKey = 'systemUserId'
  options.required = options.required || false
  return relationMixin(Model, options)
}
