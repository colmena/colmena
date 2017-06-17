'use strict'

const log = require('@colmena/logger')

const { pluralize } = require('inflection')
const { camelCase } = require('lodash')

const belongsToRelationName = modelName => camelCase(modelName)
const hasManyRelationName = modelName => pluralize(camelCase(modelName))

const belongsTo = (modelFrom, modelTo, as, foreignKey) =>
  modelFrom.belongsTo(modelTo, { as, foreignKey })
const hasMany = (modelFrom, modelTo, as, foreignKey) =>
  modelFrom.hasMany(modelTo, { as, foreignKey })

const relationMixin = (ModelFrom, options) => {
  const foreignKey = options.foreignKey
  const required = options.required || false
  const targetModel = options.targetModel

  const ModelTo = ModelFrom.dataSource.models[targetModel]

  const modelName = ModelFrom.modelName
  const targetModelName = ModelTo.modelName

  ModelTo.on('attached', () => {
    log.debug(
      `[relation-mixin] [${targetModelName}] Create relation with ${modelName}`
    )
    belongsTo(
      ModelFrom,
      ModelTo,
      belongsToRelationName(targetModelName),
      foreignKey
    )
    hasMany(ModelTo, ModelFrom, hasManyRelationName(modelName), foreignKey)
  })

  ModelFrom.defineProperty(foreignKey, { type: String, required }, {})

  ModelFrom.observe('after save', (ctx, next) => {
    if (ctx.instance && !ctx.instance[foreignKey]) {
      log.warn(
        `[relation-mixin] Missing foreignKey ${foreignKey} on ${modelName} after save`
      )
    }
    next()
  })
}

module.exports = { relationMixin }
