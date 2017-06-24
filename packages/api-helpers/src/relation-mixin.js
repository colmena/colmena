'use strict'

const debug = require('debug')('colmena:api-helpers')
const log = require('@colmena/logger')

const { pluralize } = require('inflection')
const { camelCase } = require('lodash')

const belongsToRelationName = modelName => camelCase(modelName)
const hasManyRelationName = modelName => pluralize(camelCase(modelName))

const belongsTo = (modelFrom, modelTo, as, foreignKey) =>
  modelFrom.belongsTo(modelTo, { as, foreignKey })
const hasMany = (modelFrom, modelTo, as, foreignKey) =>
  modelFrom.hasMany(modelTo, { as, foreignKey })

const relationMixin = (ModelFrom, options, relationType) => {
  const blacklist = options.blacklist || []
  const foreignKey = options.foreignKey
  const required = options.required || false
  const targetModel = options.targetModel

  const ModelTo = ModelFrom.dataSource.models[targetModel]

  const modelName = ModelFrom.modelName
  const targetModelName = ModelTo.modelName

  if (!blacklist.includes(modelName)) {
    ModelTo.on('attached', () => {
      debug(`[relation-mixin] ${targetModelName} ${relationType} ${modelName}`)

      switch (relationType) {
        case 'hasMany':
          hasMany(
            ModelTo,
            ModelFrom,
            hasManyRelationName(modelName),
            foreignKey
          )
          belongsTo(
            ModelFrom,
            ModelTo,
            belongsToRelationName(targetModelName),
            foreignKey
          )
          break
      }
    })

    ModelFrom.defineProperty(foreignKey, { type: String, required }, {})

    ModelFrom.observe('after save', (ctx, next) => {
      if (required && ctx.instance && !ctx.instance[foreignKey]) {
        log.warn(
          `[relation-mixin] Missing foreignKey ${foreignKey} on ${modelName} after save`
        )
      }
      next()
    })
  }
}

const hasManyRelation = (ModelFrom, options) =>
  relationMixin(ModelFrom, options, 'hasMany')

module.exports = {
  hasManyRelation,
}
