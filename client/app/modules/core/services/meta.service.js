'use strict';
var app = angular.module('com.module.core');

app.service('MetaService', ['$injector', 'CoreService', 'Meta', 'gettextCatalog', function ($injector, CoreService, Meta, gettextCatalog) {

  this.find = function () {
    return Meta.getModels().$promise;
  };

  this.findById = function (modelName) {
    return Meta.getModelById({
      name: modelName
    }).$promise;
  };

  this.getModelInstance = function (modelName) {
    return $injector.get(modelName);
  };

  this.getModelItems = function (modelName) {
    var Model = this.getModelInstance(modelName);
    if (typeof Model.find !== 'function') {
      return false;
    } else {
      return Model.find().$promise;
    }
  };

  this.getModelItem = function (modelName, modelId) {
    var Model = this.getModelInstance(modelName);
    if (typeof Model.find !== 'function') {
      return false;
    } else {
      return Model.findOne({
        filter: {
          where: {
            id: modelId
          }
        }
      }).$promise;
    }
  };

  this.getModelFields = function (model) {
    var result = [];
    angular.forEach(model.properties, function (value, property) {
      if (property !== 'id') {
        var itemField = {
          key: property,
          type: 'input',
          templateOptions: {
            label: property,
            required: value.required !== undefined ? value.required : false,
            description: value.description !== undefined ? value.description : false
          }
        };
        console.log(value);
        result.push(itemField);
      }
    });
    return result;
  };

  this.upsert = function (modelName, item) {
    var Model = this.getModelInstance(modelName);
    return Model.upsert(item).$promise
      .then(function () {
        CoreService.toastSuccess(
          gettextCatalog.getString('Item saved'),
          gettextCatalog.getString('Your item is safe with us!')
        );
      })
      .catch(function (err) {
        CoreService.toastError(
          gettextCatalog.getString('Error saving item '),
          gettextCatalog.getString('This item could no be saved: ' + err)
        );
      }
    );
  };

  this.delete = function (modelName, modelId, successCb, cancelCb) {
    var Model = this.getModelInstance(modelName);

    CoreService.confirm(
      gettextCatalog.getString('Are you sure?'),
      gettextCatalog.getString('Deleting this cannot be undone'),
      function () {
        Model.deleteById({id: modelId}).$promise.then(function () {
          CoreService.toastSuccess(
            gettextCatalog.getString('Item deleted'),
            gettextCatalog.getString('Your item is deleted!'));
          successCb();
        }).catch(function (err) {
          CoreService.toastError(
            gettextCatalog.getString('Error deleting item'),
            gettextCatalog.getString('Your item is not deleted! ') + err);
          cancelCb();
        });
      },
      function () {
        cancelCb();
      }
    );
  };

}]);
