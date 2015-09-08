var utils = require('loopback-datasource-juggler/lib/utils');
var _ = require('lodash');

module.exports = function (Meta) {

  /**
   * Helper method for format the type of the properties
   */
  function formatProperties (properties) {
    //for (var key in properties) {
    //  var type = properties[key].type.toString().toLowerCase().substr('function '.length);
    //  type = type.substr(0, type.indexOf('('));
    //  properties[key].type = type;
    //}
    return properties;
  }

  /**
   * Get the definition of the model
   */
  function getModelDefinition (modelName) {
    return Meta.app.models[modelName].definition;
  }

  /**
   * Get the definition of a model and format the result in a way that's similar to a LoopBack model definition file
   */
  function getModelInfo (modelName) {

    // Get the model definition
    var definition = getModelDefinition(modelName);

    // Create the base return object
    var result = {
      id: definition.name,
      name: definition.name,
      properties: formatProperties(definition.properties)
    };

    // Get the following keys from the settings object, if they are set
    var keys = ['description', 'plural', 'base', 'idInjection', 'persistUndefinedAsNull', 'strict', 'hidden',
      'validations', 'relations', 'acls', 'methods', 'mixins'
    ];
    keys.forEach(function (key) {
      result[key] = _.get(definition.settings, key);
    });
    return result;
  }

  /**
   * Get all the models with its information
   */
  Meta.getModels = function (cb) {
    cb = cb || utils.createPromiseCallback();
    var modelNames = Object.keys(Meta.app.models);
    process.nextTick(function () {
      cb(null, modelNames.sort().map(function (modelName) {
        return getModelInfo(modelName);
      }));
    });
    return cb.promise;
  };

  /**
   * Get one model with its information
   */
  Meta.getModelById = function (modelName, cb) {
    cb = cb || utils.createPromiseCallback();
    process.nextTick(function () {
      cb(null, getModelInfo(modelName));
    });
    return cb.promise;
  };

};
