'use strict';
var app = angular.module('com.module.browser');

app.config(function ($stateProvider) {
  $stateProvider.state('app.browser', {
    abstract: true,
    url: '/browser',
    templateUrl: 'modules/browser/views/main.html'
  }).state('app.browser.models', {
    url: '',
    templateUrl: 'modules/browser/views/models.html',
    controllerAs: 'ctrl',
    controller: ['Meta', 'models',
      function (Meta, models) {
        this.models = models;
      }
    ],
    resolve: {
      models: ['Meta', function (Meta) {
        return Meta.getModels().$promise.then(function (res) {
          return res;
        });
      }]
    }
  }).state('app.browser.models.info', {
    url: '/:modelName/info',
    templateUrl: 'modules/browser/views/models.info.html',
    controllerAs: 'info',
    controller: ['model', function (model) {
      this.model = model;
    }],
    resolve: {
      model: ['$stateParams', 'Meta', function ($stateParams, Meta) {
        return Meta.getModelById({
          name: $stateParams.modelName
        }).$promise;
      }]
    }
  }).state('app.browser.models.items', {
    url: '/:modelName',
    templateUrl: 'modules/browser/views/models.items.html',
    controllerAs: 'items',
    controller: ['model', 'items', function (model, items) {
      this.model = model;
      this.items = items;
      this.itemKeys = [];
      if (this.items[0] !== undefined) {
        this.itemKeys = Object.keys(this.items[0]);
      }
    }],
    resolve: {
      model: ['$stateParams', 'Meta', function ($stateParams, Meta) {
        return Meta.getModelById({
          name: $stateParams.modelName
        }).$promise;
      }],
      items: ['$stateParams', '$injector', 'Meta', function ($stateParams, $injector) {
        var Model = $injector.get($stateParams.modelName);
        if (typeof Model.find !== 'function') {
          return false;
        } else {
          return Model.find().$promise;
        }
      }]
    }
  }).state('app.browser.models.items.view', {
    url: '/:modelId/view',
    templateUrl: 'modules/browser/views/models.items.view.html',
    controllerAs: 'view',
    controller: ['item', function (item) {
      this.item = item;
      this.itemKeys = Object.keys(this.item);
    }],
    resolve: {
      item: ['$stateParams', '$injector', function ($stateParams, $injector) {
        var Model = $injector.get($stateParams.modelName);
        if (typeof Model.find !== 'function') {
          return false;
        } else {
          return Model.findOne({
            filter: {
              where: {
                id: $stateParams.modelId
              }
            }
          }).$promise;
        }
      }]
    }
  }).state('app.browser.models.items.edit', {
    url: '/:modelId/edit',
    templateUrl: 'modules/browser/views/models.items.edit.html',
    controllerAs: 'edit',
    controller: ['$state', 'SweetAlert', 'Model', 'model', 'item', 'itemFields',
      function ($state, SweetAlert, Model, model, item, itemFields) {
        this.item = item;
        this.itemFields = itemFields;
        this.submit = function () {
          Model.upsert(this.item).$promise.then(function (res) {
            SweetAlert.swal('Saved!', 'The item is saved.', 'success');
            $state.go('app.browser.models.items.view', {modelName: model.name, modelId: res.id}, {reload: true});
          });
        };
      }],
    resolve: {
      Model: ['$stateParams', '$injector',
        function ($stateParams, $injector) {
          return $injector.get($stateParams.modelName);
        }],
      item: ['$stateParams', 'Model',
        function ($stateParams, Model) {
          if (typeof Model.find !== 'function') {
            return false;
          } else {
            return Model.findOne({
              filter: {
                where: {
                  id: $stateParams.modelId
                }
              }
            }).$promise;
          }
        }],
      itemFields: ['model',
        function (model) {
          var result = [];
          angular.forEach(model.properties, function (value, property) {
            if (property !== 'id') {
              var itemField = {
                key: property,
                type: 'input',
                templateOptions: {
                  label: property
                }
              };
              result.push(itemField);
            }
          });
          return result;
        }]
    }
  }).state('app.browser.models.items.add', {
    url: '/add',
    templateUrl: 'modules/browser/views/models.items.add.html',
    controllerAs: 'add',
    controller: ['$state', 'SweetAlert', 'Model', 'model', 'itemFields',
      function ($state, SweetAlert, Model, model, itemFields) {
        this.item = {};
        this.itemFields = itemFields;
        this.submit = function () {
          Model.upsert(this.item).$promise.then(function (res) {
            SweetAlert.swal('Saved!', 'The item is saved.', 'success');
            $state.go('app.browser.models.items.view', {modelName: model.name, modelId: res.id}, {reload: true});
          });
        };
      }],
    resolve: {
      Model: ['$stateParams', '$injector',
        function ($stateParams, $injector) {
          return $injector.get($stateParams.modelName);
        }],
      itemFields: ['model', function (model) {
        var result = [];
        angular.forEach(model.properties, function (value, property) {
          if (property !== 'id') {
            var itemField = {
              key: property,
              type: 'input',
              templateOptions: {
                label: property
              }
            };
            result.push(itemField);
          }
        });
        return result;
      }]
    }
  }).state('app.browser.models.items.delete', {
    url: '/:modelId/delete',
    template: '',
    controller: ['$state', 'SweetAlert', 'Model', 'model', 'item',
      function ($state, SweetAlert, Model, model, item) {
        SweetAlert.swal({
            title: 'Are you sure?',
            text: 'Your will not be able to recover this item!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55', confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            closeOnConfirm: false,
            closeOnCancel: true
          },
          function (isConfirm) {
            if (isConfirm) {
              Model.deleteById({id: item.id}).$promise.then(function () {
                SweetAlert.swal('Deleted!', 'The item is deleted.', 'success');
                $state.go('app.browser.models.items', {modelName: model.name}, {reload: true});
              });
            } else {
              $state.go('app.browser.models.items.view', {modelName: model.name, modelId: item.id}, {reload: true});
            }
          }
        );
      }
    ],
    resolve: {
      Model: ['$stateParams', '$injector',
        function ($stateParams, $injector) {
          return $injector.get($stateParams.modelName);
        }],
      item: ['$stateParams', 'Model',
        function ($stateParams, Model) {
          if (typeof Model.find !== 'function') {
            return false;
          } else {
            return Model.findOne({
              filter: {
                where: {
                  id: $stateParams.modelId
                }
              }
            }).$promise;
          }
        }
      ]
    }
  });
});
