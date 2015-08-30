var utils = require('loopback-datasource-juggler/lib/utils');
var _ = require('lodash');

module.exports = function (Meta) {

  Meta.remoteMethod('getModelAcls', {
    accepts: [],
    returns: {
      arg: 'result',
      type: 'object',
      root: true
    },
    http: {
      path: '/getModelAcls',
      verb: 'get'
    }
  });

  Meta.getModelAcls = function (cb) {
    cb = cb || utils.createPromiseCallback();
    var models = Meta.app.models;
    var modelNames = Object.keys(models);
    var result = {};
    modelNames.forEach(function (modelName) {
      var model = models[modelName];
      result[modelName] = model.settings.acls;
    });
    process.nextTick(function () {
      cb(null, result);
    });
    return cb.promise;
  };

  Meta.remoteMethod('getModelProperties', {
    accepts: [],
    returns: {
      arg: 'result',
      type: 'object',
      root: true
    },
    http: {
      path: '/getModelProperties',
      verb: 'get'
    }
  });

  Meta.getModelProperties = function (cb) {
    cb = cb || utils.createPromiseCallback();
    var models = Meta.app.models;
    var modelNames = Object.keys(models);
    var result = {};
    modelNames.forEach(function (modelName) {
      var model = models[modelName];
            
      //add type transformation until ES6 
      for(var key in model.definition.properties) {
        var type=model.definition.properties[key].type.toString().toLowerCase().substr('function '.length);
        type=type.substr(0, type.indexOf('('));
        model.definition.properties[key].type=type;
      }      
      
      result[modelName] = model.definition.properties;
    });
    process.nextTick(function () {
      cb(null, result);
    });
    return cb.promise;
  };

  Meta.remoteMethod('getModelRelations', {
    accepts: [],
    returns: {
      arg: 'result',
      type: 'object',
      root: true
    },
    http: {
      path: '/getModelRelations',
      verb: 'get'
    }
  });

  Meta.getModelRelations = function (cb) {
    cb = cb || utils.createPromiseCallback();

    var remotes = Object.keys(Meta.app.remoteObjects());
    var models = {};

    remotes.forEach(function (remote) {
      models[remote] = Meta.app.models[remote].settings.relations;
    });

    var result = {
      nodes: [],
      edges: []
    };

    // Loop through models to fill node array
    _.mapKeys(models, function (relations, model) {
      result.nodes.push({
        id: model,
        label: model
      });
      // Loop through model relations to fill edge array
      _.mapKeys(relations, function (relation) {
        result.edges.push({
          from: model,
          to: relation.model,
          label: relation.type
        });
      });
    });

    process.nextTick(function () {
      cb(null, result);
    });
    return cb.promise;
  };

  Meta.remoteMethod('getModelRemotes', {
    accepts: [],
    returns: {
      arg: 'result',
      type: 'object',
      root: true
    },
    http: {
      path: '/getModelRemotes',
      verb: 'get'
    }
  });

  Meta.getModelRemotes = function (cb) {
    cb = cb || utils.createPromiseCallback();
    process.nextTick(function () {
      cb(null, Object.keys(Meta.app.remoteObjects()));
    });
    return cb.promise;
  };

  Meta.remoteMethod('getModelSettings', {
    accepts: [],
    returns: {
      arg: 'result',
      type: 'object',
      root: true
    },
    http: {
      path: '/getModelSettings',
      verb: 'get'
    }
  });

  Meta.getModelSettings = function (cb) {
    cb = cb || utils.createPromiseCallback();

    var models = Meta.app.models;
    var modelNames = Object.keys(models);

    var result = {};
    modelNames.forEach(function (modelName) {
      var model = models[modelName];
      result[modelName] = model.settings;
    });

    process.nextTick(function () {
      cb(null, result);
    });
    return cb.promise;
  };

}
;
