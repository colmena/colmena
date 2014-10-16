'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.pages', {
      abstract: true,
      url: '/pages',
      templateUrl: 'views/pages/main.html',
      controller: 'PagesCtrl'
    })
    .state('app.pages.list', {
      url: '',
      templateUrl: 'views/pages/list.html',
      controller: 'PagesCtrl'
    })
    .state('app.pages.add', {
      url: '/add',
      templateUrl: 'views/pages/form.html',
      controller: 'PagesCtrl'
    })
    .state('app.pages.edit', {
      url: '/:id/edit',
      templateUrl: 'views/pages/form.html',
      controller: 'PagesCtrl'
    })
    .state('app.pages.view', {
      url: '/:id',
      templateUrl: 'views/pages/view.html',
      controller: 'PagesCtrl'
    });
  })

.controller('PagesCtrl', function($scope, $state, $stateParams, toasty, Page) {

  var pageId = $stateParams.id;

  if (pageId) {
    $scope.page = Page.findById({
      id: pageId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.page = {'content': '# Start typing here!'};
  }

  function loadPages() {
    $scope.pages = Page.find();
  }

  loadPages();

  $scope.delete = function(id) {
    // if (confirm('Are you sure?') === false) {
      // return false;
    // }
    Page.deleteById(id, function() {
      toasty.pop.success({title: 'Page deleted', msg: 'Your page is deleted!', sound: false});
      loadPages();
      $state.go('app.pages.list');
      console.log();
    }, function(err) {
      toasty.pop.error({title: 'Error deleting page', msg: 'Your page is not deleted: ' + err, sound: false});
    });

  };

  $scope.formFields = [{
    key: 'name',
    label: 'Name',
    type: 'text',
    required: true
  }, {
    key: 'slug',
    label: 'Slug',
    type: 'text'
  }];

  $scope.formOptions = {

      //Set the id of the form
      uniqueFormId: true,

      //Hide the submit button that is added automaticaly
      //default: false
      hideSubmit: true,

      //Set the text on the default submit button
      //default: Submit
      submitCopy: 'Save'
  };

  $scope.onSubmit = function() {

    Page.upsert($scope.page, function() {
      toasty.pop.success({title: 'Page saved', msg: 'Your page is safe with us!', sound: false});
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });

  };


});
