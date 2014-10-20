'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the clientApp
 */
angular.module('loopbackApp')

  .config(function($stateProvider) {
    $stateProvider.state('app.products', {
      abstract: true,
      url: '/products',
      templateUrl: 'views/products/main.html',
      controller: 'ProductsCtrl'
    })
    .state('app.products.list', {
      url: '',
      templateUrl: 'views/products/list.html',
      controller: 'ProductsCtrl'
    })
    .state('app.products.add', {
      url: '/add',
      templateUrl: 'views/products/form.html',
      controller: 'ProductsCtrl'
    })
    .state('app.products.edit', {
      url: '/:id/edit',
      templateUrl: 'views/products/form.html',
      controller: 'ProductsCtrl'
    })
    .state('app.products.view', {
      url: '/:id',
      templateUrl: 'views/products/view.html',
      controller: 'ProductsCtrl'
    });
  })

  .controller('ProductsCtrl', function($scope, $state, $stateParams, toasty, Product, SweetAlert) {

  var productId = $stateParams.id;

  if (productId) {
    $scope.product = Product.findById({
      id: productId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.product = {};
  }

  function loadItems() {
    $scope.products = Product.find();
  }

  loadItems();

  $scope.delete = function(id) {
    SweetAlert.swal({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function(isConfirm){
      if (isConfirm) {
        Product.deleteById(id, function() {
          toasty.pop.success({title: 'Product deleted', msg: 'Your product is deleted!', sound: false});
          loadItems();
          $state.go('app.products.list');
          console.log();
        }, function(err) {
          toasty.pop.error({title: 'Error deleting product', msg: 'Your product is not deleted: ' + err, sound: false});
        });
      } else {
        return false;
      }
    });
  };

  $scope.formFields = [{
    key: 'title',
    type: 'text',
    label: 'Title',
    required: true
  }, {
    key: 'body',
    type: 'text',
    label: 'Body',
    required: true
  }];

  $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
  };

  $scope.onSubmit = function() {
    Product.upsert($scope.product, function() {
      toasty.pop.success({title: 'Product saved', msg: 'Your product is safe with us!', sound: false});
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };

  });
