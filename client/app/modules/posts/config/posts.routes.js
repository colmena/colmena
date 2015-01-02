'use strict';
angular.module('com.module.posts')
 .config(function($stateProvider) {
    $stateProvider.state('app.posts', {
      abstract: true,
      url: '/posts',
      templateUrl: 'modules/posts/views/main.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.list', {
      url: '',
      templateUrl: 'modules/posts/views/list.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.add', {
      url: '/add',
      templateUrl: 'modules/posts/views/form.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/posts/views/form.html',
      controller: 'PostsCtrl'
    })
    .state('app.posts.view', {
      url: '/:id',
      templateUrl: 'modules/posts/views/view.html',
      controller: 'PostsCtrl'
    });
  });
