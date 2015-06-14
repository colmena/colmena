'use strict';
angular
    .module ('module.users')
    .controller ('UsersCtrl', function ($scope, $stateParams, $state, CoreService, User, gettextCatalog) {

    var self = this;

    if ($stateParams.id) {
        User.findOne ({
            filter: {
                where  : {
                    id: $stateParams.id
                },
                include: ['roles', 'identities', 'credentials', 'accessTokens']
            }
        }, function (result) {
            self.user = result;
        }, function (err) {
            console.log (err);
        });
    } else {
        self.user = {};
    }

    self.delete = function (id) {
        CoreService.confirm (gettextCatalog.getString ('Are you sure?'),
            gettextCatalog.getString ('Deleting this cannot be undone'),
            function () {
                User
                    .deleteById (id, function () {
                        CoreService.toastSuccess (gettextCatalog.getString ('User deleted'), gettextCatalog.getString ('Your user is deleted!'));
                        self.data.splice (id, 1);
                        $state.go ('app.users.list');
                    },
                    function (err) {
                        CoreService.toastError (gettextCatalog.getString ('Error deleting user'), gettextCatalog.getString ('Your user is not deleted:' + err));
                    });
            },
            function () {
                return false;
            });
    };

    self.loading = true;

    self.data = User.find ({
        filter: {
            include: ['roles']
        }
    }, function () {
        self.loading = false;
    });

    self.onSubmit = function () {
        User.upsert (self.user, function () {
            CoreService.toastSuccess (gettextCatalog.getString ('User saved'),
                gettextCatalog.getString ('This user is save!'));
            $state.go ('^.list');
        }, function (err) {
            CoreService.toastError (gettextCatalog.getString (
                'Error saving user: ', +err));
        });
    };

    self.formFields = [{
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

    self.formOptions = {
        uniqueFormId: true,
        hideSubmit  : false,
        submitCopy  : gettextCatalog.getString ('Save')
    };

});
