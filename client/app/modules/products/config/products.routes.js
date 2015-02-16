'use strict';
angular.module('com.module.products')
  .config(function($stateProvider) {
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
        controller: 'ProductsCtrl'
      })
      .state('app.products.edit', {
        url: '/:id/edit',
        templateUrl: 'modules/products/views/form.html',
        controller: 'ProductsCtrl'
      })
      .state('app.products.addcategory', {
        url: '/addcategory',
        templateUrl: 'modules/products/views/categoryform.html',
        controller: 'CategoriesCtrl'
      })
      .state('app.products.view', {
        url: '/:id',
        templateUrl: 'modules/products/views/view.html',
        controller: 'ProductsCtrl'
      })
      .state('app.products.editcategory', {
        url: '/editcategory/:categoryId',
        templateUrl: 'modules/products/views/categoryform.html',
        controller: 'CategoriesCtrl'
      });
  });
