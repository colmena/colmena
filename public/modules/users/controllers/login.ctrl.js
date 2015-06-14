/**
 * @ngdoc function
 * @name module.users.controller:LoginCtrl
 * @description Login Controller
 * @requires $scope
 * @requires $routeParams
 * @requires $location
 * Contrller for Login Page
 **/
'use strict';
angular
    .module ('module.users')
    .controller ('LoginCtrl', function ($scope, $routeParams, $location, CoreService, User, AppAuth, AuthProvider, gettextCatalog) {

    var TWO_WEEKS = 1000 * 60 * 60 * 24 * 7 * 2;

    $scope.credentials = {
        ttl       : TWO_WEEKS,
        rememberMe: true
    };

    if (CoreService.env.name === 'development') {
        $scope.credentials.email    = 'admin@admin.com';
        $scope.credentials.password = 'admin';
    }

    $scope.schema = [{
        label      : '',
        property   : 'email',
        placeholder: gettextCatalog.getString ('Email'),
        type       : 'email',
        attr       : {
            required   : true,
            ngMinlength: 4
        },
        msgs       : {
            required: gettextCatalog.getString ('You need an email address'),
            email   : gettextCatalog.getString ('Email address needs to be valid'),
            valid   : gettextCatalog.getString ('Nice email address!')
        }
    }, {
        label      : '',
        property   : 'password',
        placehodler: gettextCatalog.getString ('Password'),
        type       : 'password',
        attr       : {
            required: true
        }
    }, {
        property: 'rememberMe',
        label   : gettextCatalog.getString ('Stay signed in'),
        type    : 'checkbox'
    }];

    $scope.options = {
        validation: {
            enabled     : true,
            showMessages: false
        },
        layout    : {
            type     : 'basic',
            labelSize: 3,
            inputSize: 9
        }
    };

    $scope.socialLogin = function (provider) {
        window.location = CoreService.env.siteUrl + provider.authPath;
    };

    AuthProvider.count (function (result) {
        if (result.count > 0) {
            AuthProvider.find (function (result) {
                $scope.authProviders = result;
            });
        }
    });

    $scope.login = function () {

        $scope.loginResult = User.login ({
                include   : 'user',
                rememberMe: $scope.credentials.rememberMe
            }, $scope.credentials,
            function (user) {

                console.log (user.id); // => acess token
                console.log (user.ttl); // => 1209600 time to live
                console.log (user.created); // => 2013-12-20T21:10:20.377Z
                console.log (user.userId); // => 1

                var next                 = $location.nextAfterLogin || '/';
                $location.nextAfterLogin = null;
                AppAuth.currentUser      = $scope.loginResult.user;
                CoreService.toastSuccess (gettextCatalog.getString ('Logged in'),
                    gettextCatalog.getString ('You are logged in!'));
                if (next === '/login') {
                    next = '/';
                }
                $location.path (next);

            },
            function (res) {
                $scope.loginError = res.data.error;
            });

    };

});
