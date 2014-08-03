'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.items', {
      abstract: true,
      url: '/items',
      templateUrl: 'views/items/main.html',
      controller: 'ItemsCtrl'
    })
    .state('app.items.list', {
      url: '',
      templateUrl: 'views/items/list.html',
      controller: 'ItemsCtrl'
    })
    .state('app.items.add', {
      url: '/add',
      templateUrl: 'views/items/form.html',
      controller: 'ItemsCtrl'
    })
    .state('app.items.edit', {
      url: '/:id/edit',
      templateUrl: 'views/items/form.html',
      controller: 'ItemsCtrl'
    })
    .state('app.items.view', {
      url: '/:id',
      templateUrl: 'views/items/view.html',
      controller: 'ItemsCtrl'
    });
  })

.controller('ItemsCtrl', function($scope, $state, $stateParams, $notification, Item) {

  var itemId = $stateParams.id;

  if (itemId) {
    $scope.item = Item.findById({
      id: itemId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.item = {};
  }

  function loadItems() {
    $scope.items = Item.find();
  }

  loadItems();

  $scope.delete = function(id) {
    // if (confirm('Are you sure?') === false) {
      // $notification.success('Delete canceled!', 'Yay!!');
      // return false;
    // }
    Item.deleteById(id, function() {
      $notification.success('Item deleted', 'Your item is deleted!');
      loadItems();
      $state.go('app.items.list');
      console.log();
    }, function(err) {
      $notification.success('Error deleting item', 'Your item is note deleted! ' + err);
    });

  };

  $scope.formFields = [{
    key: 'name',
    type: 'text',
    label: 'Name',
    required: true
  }, {
    key: 'description',
    type: 'text',
    label: 'Description',
    required: true
  }];

  $scope.formOptions = {

      //Set the id of the form
      uniqueFormId: true,

      //Hide the submit button that is added automaticaly
      //default: false
      hideSubmit: false,

      //Set the text on the default submit button
      //default: Submit
      submitCopy: 'Save'
  };

  $scope.onSubmit = function() {

    Item.upsert($scope.item, function() {
      $notification.success('Item added', 'Your item is safe with us!');
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });

  };


});
