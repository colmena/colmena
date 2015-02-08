'use strict';
var app = angular.module('com.module.posts');

app.service('PostsService', ['$http', 'Post', function ($http, Post) {
  this.savePost = function (goat) {
    return $http.post('/goats', goat);
  };

  this.getPosts = function () {
    return Post.find().$promise;
  };

  this.getPost = function (postId) {
    return Post.findById({
      id: postId
    });
  };
}]);
