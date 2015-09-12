(function () {
  'use strict';
  angular
    .module('com.module.browser')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.browser', {
          abstract: true,
          url: '/browser',
          templateUrl: 'modules/browser/views/main.html'
        })
        .state('app.browser.models', {
          url: '',
          templateUrl: 'modules/browser/views/models.html',
          controllerAs: 'ctrl',
          controller: [
            'models',
            function (models) {
              this.models = models;
            }
          ],
          resolve: {
            models: [
              'MetaService',
              function (MetaService) {
                return MetaService.find();
              }
            ]
          }
        })
        .state('app.browser.models.info', {
          url: '/:modelName/info',
          templateUrl: 'modules/browser/views/models.info.html',
          controllerAs: 'info',
          controller: [
            'model',
            function (model) {
              this.model = model;
            }
          ],
          resolve: {
            model: [
              '$stateParams',
              'MetaService',
              function ($stateParams, MetaService) {
                return MetaService.findById($stateParams.modelName);
              }
            ]
          }
        })
        .state('app.browser.models.items', {
          url: '/:modelName',
          templateUrl: 'modules/browser/views/models.items.html',
          controllerAs: 'items',
          controller: [
            'model',
            'items',
            function (model, items) {
              this.model = model;
              this.items = items;
              this.itemKeys = [];
              if (this.items[0] !== undefined) {
                this.itemKeys = Object.keys(this.items[0]);
              }
            }
          ],
          resolve: {
            model: [
              '$stateParams',
              'MetaService',
              function ($stateParams, MetaService) {
                return MetaService.findById($stateParams.modelName);
              }
            ],
            items: [
              '$stateParams',
              'MetaService',
              function ($stateParams, MetaService) {
                return MetaService.getModelItems($stateParams.modelName);
              }
            ]
          }
        })
        .state('app.browser.models.items.view', {
          url: '/:modelId/view',
          templateUrl: 'modules/browser/views/models.items.view.html',
          controllerAs: 'view',
          controller: [
            'item',
            function (item) {
              this.item = item;
              this.itemKeys = Object.keys(this.item);
            }
          ],
          resolve: {
            item: [
              '$stateParams',
              'MetaService',
              function ($stateParams, MetaService) {
                return MetaService.getModelItem($stateParams.modelName, $stateParams.modelId);
              }
            ]
          }
        })
        .state('app.browser.models.items.edit', {
          url: '/:modelId/edit',
          templateUrl: 'modules/browser/views/models.items.edit.html',
          controllerAs: 'edit',
          controller: [
            '$state',
            'MetaService',
            'model',
            'item',
            'itemFields',
            function ($state, MetaService, model, item, itemFields) {
              this.item = item;
              this.itemFields = itemFields;
              this.submit = function () {
                MetaService.upsert(model.name, this.item).then(function () {
                  $state.go('app.browser.models.items', {modelName: model.name}, {reload: true});
                });
              };
            }
          ],
          resolve: {
            item: [
              '$stateParams',
              'MetaService',
              function ($stateParams, MetaService) {
                return MetaService.getModelItem($stateParams.modelName, $stateParams.modelId);
              }
            ],
            itemFields: [
              '$stateParams',
              'MetaService',
              'model',
              function ($stateParams, MetaService, model) {
                return MetaService.getModelFields(model);
              }
            ]
          }
        })
        .state('app.browser.models.items.add', {
          url: '/add',
          templateUrl: 'modules/browser/views/models.items.add.html',
          controllerAs: 'add',
          controller: [
            '$state',
            'MetaService',
            'model',
            'itemFields',
            function ($state, MetaService, model, itemFields) {
              this.item = {};
              this.itemFields = itemFields;
              this.submit = function () {
                MetaService.upsert(model.name, this.item).then(function () {
                  $state.go('app.browser.models.items', {modelName: model.name}, {reload: true});
                });
              };
            }
          ],
          resolve: {
            itemFields: [
              '$stateParams',
              'MetaService',
              'model',
              function ($stateParams, MetaService, model) {
                return MetaService.getModelFields(model);
              }
            ]
          }
        })
        .state('app.browser.models.items.delete', {
          url: '/:modelId/delete',
          template: '',
          controller: [
            '$state',
            '$stateParams',
            'MetaService',
            'model',
            function ($state, $stateParams, MetaService, model) {
              MetaService.delete(model.name, $stateParams.modelId, function () {
                $state.go('app.browser.models.items', {modelName: model.name}, {reload: true});
              }, function () {
                $state.go('app.browser.models.items', {modelName: model.name}, {reload: true});
              });
            }
          ]
        });
    });

})();
