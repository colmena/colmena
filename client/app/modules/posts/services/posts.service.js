'use strict';
var app = angular.module('com.module.posts');

app.service('PostsService', ['Post', function (Post) {

  this.getPosts = function () {
    return Post.find().$promise;
  };

}]);
