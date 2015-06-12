'use strict';
angular
    .module ('com.module.posts')
    .controller ('PostsCtrl', function ($scope, $state, $stateParams, CoreService, FormHelper, gettextCatalog, Post, PostsService) {

    $scope.delete = function (id) {
        PostsService.deletePost (id, function () {
            $state.reload ();
        });
    };

    this.formHelper = new FormHelper (Post);
    $scope.cancel   = function () {
        console.log ('Cancel');
        console.log (this.formHelper);
        //this.formHelper.cancel('app.posts.list');
    };

    var postId = $stateParams.id;

    if (postId) {
        $scope.post = Post.findById ({
            id: postId
        }, function () {}, function (err) {
            console.log (err);
        });
    } else {
        $scope.post = {};
    }

    $scope.formFields = [{
        key     : 'title',
        type    : 'text',
        label   : gettextCatalog.getString ('Title'),
        required: true
    }, {
        key     : 'content',
        type    : 'textarea',
        label   : gettextCatalog.getString ('Content'),
        required: true
    }, {
        key     : 'image',
        type    : 'text',
        label   : gettextCatalog.getString ('image'),
        required: true
    }];

    $scope.formOptions = {
        uniqueFormId: true,
        hideSubmit  : false,
        submitCopy  : gettextCatalog.getString ('Save')
    };

    $scope.onSubmit = function () {
        Post.upsert ($scope.post, function () {
            CoreService.toastSuccess (gettextCatalog.getString ('Post saved'),
                gettextCatalog.getString ('Your post is safe with us!'));
            $state.go ('^.list');
        }, function (err) {
            console.log (err);
        });
    };

});
