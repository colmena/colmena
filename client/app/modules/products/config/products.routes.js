'use strict';
angular.module('com.module.products')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.products', {
        abstract: true,
        url: '/products',
        templateUrl: 'modules/products/views/main.html'
      })
      .state('app.products.list', {
        url: '',
        templateUrl: 'modules/products/views/list.html',
        controller: 'ProductsCtrl'
      })
      .state('app.products.add', {
        url: '/add/:categoryId',
        templateUrl: 'modules/products/views/form.html',
        controller: 'ProductsFormCtrl',
        controllerAs: 'ctrl',
        resolve: {
          categories: function (Category) {
            return Category.find().$promise;
          },
          product: function ($stateParams) {
            return {
              categoryId: $stateParams.categoryId
            };
          }
        }
      })
      .state('app.products.edit', {
        url: '/:productId/edit',
        templateUrl: 'modules/products/views/form.html',
        controller: 'ProductsFormCtrl',
        controllerAs: 'ctrl',
        resolve: {
          categories: function (Category) {
            return Category.find().$promise;
          },
          product: function ($stateParams, Product) {
            return Product.findById({id: $stateParams.productId}).$promise;
          }
        }
      })
      .state('app.products.addcategory', {
        url: '/addcategory',
        templateUrl: 'modules/products/views/categoryform.html',
        controller: 'CategoriesCtrl'
      })
      .state('app.products.view', {
        url: '/:productId',
        templateUrl: 'modules/products/views/view.html',
        resolve: {
          product: function ($stateParams, Product) {
            return Product.findById({id: $stateParams.productId}).$promise;
          }
        },
        controller: function (product) {
          this.product = product;
        },
        controllerAs: 'ctrl'
      })
      .state('app.products.editcategory', {
        url: '/editcategory/:categoryId',
        templateUrl: 'modules/products/views/categoryform.html',
        controller: 'CategoriesCtrl'
      });
  });
