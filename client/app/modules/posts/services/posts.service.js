'use strict';
angular.module('com.module.posts')
  .service('PostsService', ['$http', 'Post', function ($http, Post) {
    this.savePost = function (goat) {
      return $http.post('/goats', goat);
    };

    this.getPosts = function () {
      return Post.find();
    };

    this.getPost = function (postId) {
      return Post.findById({
        id: postId
      });
    };
  }]);
