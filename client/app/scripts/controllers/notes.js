'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the clientApp
 */
angular.module('loopbackApp')

  .config(function($stateProvider) {
    $stateProvider.state('app.notes', {
      abstract: true,
      url: '/notes',
      templateUrl: 'views/notes/main.html',
      controller: 'NotesCtrl'
    })
    .state('app.notes.list', {
      url: '',
      templateUrl: 'views/notes/list.html',
      controller: 'NotesCtrl'
    })
    .state('app.notes.add', {
      url: '/add',
      templateUrl: 'views/notes/form.html',
      controller: 'NotesCtrl'
    })
    .state('app.notes.edit', {
      url: '/:id/edit',
      templateUrl: 'views/notes/form.html',
      controller: 'NotesCtrl'
    })
    .state('app.notes.view', {
      url: '/:id',
      templateUrl: 'views/notes/view.html',
      controller: 'NotesCtrl'
    });
  })

  .controller('NotesCtrl', function($scope, $state, $stateParams, $notification, Note) {

  var noteId = $stateParams.id;

  if (noteId) {
    $scope.note = Note.findById({
      id: noteId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.note = {};
  }

  function loadItems() {
    $scope.notes = Note.find();
  }

  loadItems();

  $scope.delete = function(id) {
    // if (confirm('Are you sure?') === false) {
    //   $notification.success('Delete canceled!', 'Yay!!');
    //   return false;
    // }
    Note.deleteById(id, function() {
      $notification.success('Note deleted', 'Your note is deleted!');
      loadItems();
      $state.go('app.notes.list');
      console.log();
    }, function(err) {
      $notification.success('Error deleting note', 'Your note is note deleted! ' + err);
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
    Note.upsert($scope.note, function() {
      $notification.success('Note saved', 'Your note is safe with us!');
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };

  });
