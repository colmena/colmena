'use strict';

var app = angular.module('com.module.posts');

app.config(function ($stateProvider) {
  $stateProvider.state('app.posts', {
    abstract: true,
    url: '/posts',
    templateUrl: 'modules/posts/views/main.html'
  }).state('app.posts.list', {
    url: '',
    templateUrl: 'modules/posts/views/list.html',
    controller: 'PostsCtrl',
    controllerAs: 'ctrl',
    resolve: {
      posts: ['PostsService', function (PostsService) {
        return PostsService.getPosts();
      }]
    }
  }).state('app.posts.add', {
    url: '/add',
    templateUrl: 'modules/posts/views/form.html',
    controller: 'PostsCtrl'
  }).state('app.posts.edit', {
    url: '/:id/edit',
    templateUrl: 'modules/posts/views/form.html',
    controller: 'PostsCtrl'
  }).state('app.posts.view', {
    url: '/:id',
    templateUrl: 'modules/posts/views/view.html',
    controller: 'PostsCtrl'
  });
});
