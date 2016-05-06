const utils = require('loopback-datasource-juggler/lib/utils')
const _ = require('lodash')

module.exports = function (Meta) {

  /**
   * Helper method for format the type of the properties
   */
  function formatProperties (properties) {
    const result = {}
    for (let key in properties) {
      result[ key ] = _.clone(properties[ key ])
      result[ key ].type = properties[ key ].type.name
    }
    return result
  }

  /**
   * Get the definition of a model and format the result in a way that's similar to a LoopBack model definition file
   */
  function getModelInfo (modelName) {

    // Get the model
    const model = Meta.app.models[ modelName ]

    // Create the base return object
    const result = {
      id: model.definition.name,
      name: model.definition.name,
      properties: formatProperties(model.definition.properties),
    }

    // Get the following keys from the settings object, if they are set
    const keys = [ 'description', 'plural', 'base', 'idInjection', 'persistUndefinedAsNull', 'strict', 'hidden',
      'validations', 'relations', 'acls', 'methods', 'mixins',
    ]
    keys.forEach((key) => {
      result[ key ] = _.get(model.definition.settings, key)
    })
    return result
  }

  /**
   * Get all the models with its information
   */
  Meta.getModels = function (cb) {
    cb = cb || utils.createPromiseCallback()
    const modelNames = Object.keys(Meta.app.models)
    process.nextTick(() => {
      cb(null, modelNames.sort().map((modelName) => getModelInfo(modelName)))
    })
    return cb.promise
  }

  /**
   * Get one model with its information
   */
  Meta.getModelById = function (modelName, cb) {
    cb = cb || utils.createPromiseCallback()
    process.nextTick(() => cb(null, getModelInfo(modelName)))
    return cb.promise
  }

}
