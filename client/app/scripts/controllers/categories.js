'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the clientApp
 */
angular.module('loopbackApp')

  .config(function($stateProvider) {
    $stateProvider.state('app.categories', {
      abstract: true,
      url: '/categories',
      templateUrl: 'views/categories/main.html',
      controller: 'CategoriesCtrl'
    })
    .state('app.categories.list', {
      url: '',
      templateUrl: 'views/categories/list.html',
      controller: 'CategoriesCtrl'
    })
    .state('app.categories.add', {
      url: '/add',
      templateUrl: 'views/categories/form.html',
      controller: 'CategoriesCtrl'
    })
    .state('app.categories.edit', {
      url: '/:id/edit',
      templateUrl: 'views/categories/form.html',
      controller: 'CategoriesCtrl'
    })
    .state('app.categories.view', {
      url: '/:id',
      templateUrl: 'views/categories/view.html',
      controller: 'CategoriesCtrl'
    });
  })

  .controller('CategoriesCtrl', function($scope, $state, $stateParams, toasty, Category) {

  var categoryId = $stateParams.id;

  if (categoryId) {
    $scope.category = Category.findById({
      id: categoryId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.category = {};
  }

  function loadItems() {
    $scope.categories = Category.find();
  }

  loadItems();

  $scope.delete = function(id) {
    // if (confirm('Are you sure?') === false) {
    //   return false;
    // }
    Category.deleteById(id, function() {
      toasty.pop.success({title: 'Category deleted', msg: 'Your category is deleted!', sound: false});
      loadItems();
      $state.go('app.categories.list');
      console.log();
    }, function(err) {
      toasty.pop.error({title: 'Error deleting category', msg: 'Your category is not deleted: ' + err, sound: false});
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
    Category.upsert($scope.category, function() {
      toasty.pop.success({title: 'Category saved', msg: 'Your category is safe with us!', sound: false});
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };

  });
