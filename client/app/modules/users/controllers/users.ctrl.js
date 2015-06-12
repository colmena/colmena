'use strict';
angular
    .module ('com.module.users')
    .controller ('UsersCtrl', function ($scope, $stateParams, $state, CoreService,
        User, gettextCatalog) {


        if ($stateParams.id) {
            User.findOne ({
                filter: {
                    where  : {
                        id: $stateParams.id
                    },
                    include: ['roles', 'identities', 'credentials', 'accessTokens']
                }
            }, function (result) {
                $scope.user = result;
            }, function (err) {
                console.log (err);
            });
        } else {
            $scope.user = {};
        }

        $scope.delete = function (id) {
            CoreService.confirm (gettextCatalog.getString ('Are you sure?'),
                gettextCatalog.getString ('Deleting this cannot be undone'),
                function () {
                    User.deleteById (id, function () {
                            CoreService.toastSuccess (gettextCatalog.getString (
                                'User deleted'), gettextCatalog.getString (
                                'Your user is deleted!'));
                            $state.go ('app.users.list');
                        },
                        function (err) {
                            CoreService.toastError (gettextCatalog.getString (
                                'Error deleting user'), gettextCatalog.getString (
                                'Your user is not deleted:' + err));
                        });
                },
                function () {
                    return false;
                });
        };

        $scope.loading = true;
        $scope.users   = User.find ({
            filter: {
                include: ['roles']
            }
        }, function () {
            $scope.loading = false;
        });

        $scope.onSubmit = function () {
            User.upsert ($scope.user, function () {
                CoreService.toastSuccess (gettextCatalog.getString ('User saved'),
                    gettextCatalog.getString ('This user is save!'));
                $state.go ('^.list');
            }, function (err) {
                CoreService.toastError (gettextCatalog.getString (
                    'Error saving user: ', +err));
            });
        };

        $scope.formFields = [{
            key     : 'username',
            type    : 'text',
            label   : gettextCatalog.getString ('Username'),
            required: true
        }, {
            key     : 'email',
            type    : 'email',
            label   : gettextCatalog.getString ('E-mail'),
            required: true
        }, {
            key     : 'firstName',
            type    : 'text',
            label   : gettextCatalog.getString ('First name'),
            required: true
        }, {
            key     : 'lastName',
            type    : 'text',
            label   : gettextCatalog.getString ('Last name'),
            required: true
        }];

        $scope.formOptions = {
            uniqueFormId: true,
            hideSubmit  : false,
            submitCopy  : gettextCatalog.getString ('Save')
        };

    });
