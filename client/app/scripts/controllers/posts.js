'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')

  .config(function($stateProvider) {
    $stateProvider.state('app.posts', {
      abstract: true,
      url: '/posts',
      templateUrl: 'views/posts/main.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.list', {
      url: '',
      templateUrl: 'views/posts/list.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.add', {
      url: '/add',
      templateUrl: 'views/posts/form.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.edit', {
      url: '/:id/edit',
      templateUrl: 'views/posts/form.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.view', {
      url: '/:id',
      templateUrl: 'views/posts/view.html',
      controller: 'PostsCtrl'
    });
  })

  .controller('PostsCtrl', function($scope, $state, $stateParams, toasty, Post) {

  var postId = $stateParams.id;

  if (postId) {
    $scope.post = Post.findById({
      id: postId
    }, function() {}, function(err) {
      console.log(err);
    });
  } else {
    $scope.post = {};
  }

  function loadItems() {
    $scope.posts = Post.find();
  }

  loadItems();

  $scope.delete = function(id) {
    // if (confirm('Are you sure?') === false) {
    //   return false;
    // }
    Post.deleteById(id, function() {
      toasty.pop.success({title: 'Post deleted', msg: 'Your post is deleted!', sound: false});
      loadItems();
      $state.go('app.posts.list');
      console.log();
    }, function(err) {
      toasty.pop.error({title: 'Error deleting post', msg: 'Your post is not deleted: ' + err, sound: false});
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
    Post.upsert($scope.post, function() {
      toasty.pop.success({title: 'Post saved', msg: 'Your post is safe with us!', sound: false});
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };

  });
