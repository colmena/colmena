'use strict';
angular.module('com.module.posts')
  .controller('PostsCtrl', function ($scope, $state, $stateParams, CoreService, toasty, Post) {

    var postId = $stateParams.id;

    if (postId) {
      $scope.post = Post.findById({
        id: postId
      }, function () {
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.post = {};
    }

    function loadItems() {
      $scope.posts = Post.find();
    }

    loadItems();

    $scope.delete = function (id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        Post.deleteById(id, function () {
          toasty.pop.success({title: 'Post deleted', msg: 'Your post is deleted!', sound: false});
          loadItems();
          $state.go('app.posts.list');
        }, function (err) {
          toasty.pop.error({title: 'Error deleting post', msg: 'Your post is not deleted: ' + err, sound: false});
        });
      }, function () {
        return false;
      });
    };

    $scope.formFields = [
      {
        key: 'title',
        type: 'text',
        label: 'Title',
        required: true
      },
      {
        key: 'content',
        type: 'textarea',
        label: 'Content',
        required: true
      },
      {
        key: 'image',
        type: 'text',
        label: 'image',
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      Post.upsert($scope.post, function () {
        toasty.pop.success({title: 'Post saved', msg: 'Your post is safe with us!', sound: false});
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
