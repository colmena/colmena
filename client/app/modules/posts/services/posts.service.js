'use strict';
angular
    .module ('com.module.posts')
    .service ('PostsService', function (CoreService, gettextCatalog, Post) {

    this.getPosts = function () {
        return Post.find ({
            filter: {
                order: 'created DESC'
            }
        }).$promise;
    };

    this.getPost = function (id) {
        return Post.findById ({
            id: id
        }).$promise;
    };

    this.deletePost = function (id, cb) {
        CoreService.confirm (gettextCatalog.getString ('Are you sure?'),
            gettextCatalog.getString ('Deleting this cannot be undone'),
            function () {
                Post.deleteById (id, function () {
                    CoreService.toastSuccess (gettextCatalog.getString (
                        'Item deleted'), gettextCatalog.getString (
                        'Your item has been deleted!'));
                    cb ();
                }, function (err) {
                    CoreService.toastError (gettextCatalog.getString ('Oops'),
                        gettextCatalog.getString ('Error deleting item: ') +
                        err);
                    cb ();
                });
            },
            function () {
                return false;
            });
    };

});
