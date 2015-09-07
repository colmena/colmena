'use strict';
angular.module('com.module.users')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        template: '<register></register>',
        controller: 'RegisterCtrl'
      })
      .state('app.users', {
        abstract: true,
        url: '/users',
        templateUrl: 'modules/users/views/main.html'
      })
      .state('app.users.list', {
        url: '',
        templateUrl: 'modules/users/views/list.html',
        controllerAs: 'ctrl',
        controller: function (users) {
          console.log('users', users);
          this.users = users;
        },
        resolve: {
          users: function (UserService) {
            console.log('users');
            return UserService.find();
          }
        }
      })
      .state('app.users.add', {
        url: '/add',
        templateUrl: 'modules/users/views/form.html',
        controllerAs: 'ctrl',
        controller: function ($state, UserService, user) {
          this.user = user;
          this.formFields = UserService.getFormFields('add');
          this.formOptions = {};
          this.submit = function () {
            UserService.upsert(this.user).then(function () {
              $state.go('^.list');
            }).catch(function (err) {
              console.log(err);
            });
          };
        },
        resolve: {
          user: function () {
            return {};
          }
        }
      })
      .state('app.users.edit', {
        url: '/edit/:id',
        templateUrl: 'modules/users/views/form.html',
        controllerAs: 'ctrl',
        controller: function ($state, UserService, user) {
          this.user = user;
          this.formFields = UserService.getFormFields('edit');
          this.formOptions = {};
          this.submit = function () {
            UserService.upsert(this.user).then(function () {
              $state.go('^.list');
            });
          };
        },
        resolve: {
          user: function ($stateParams, UserService) {
            return UserService.findById($stateParams.id);
          }
        }
      })
      .state('app.users.view', {
        url: '/view/:id',
        templateUrl: 'modules/users/views/view.html',
        controllerAs: 'ctrl',
        controller: function (user) {
          this.user = user;
        },
        resolve: {
          user: function ($stateParams, UserService) {
            return UserService.findById($stateParams.id);
          }
        }
      })
      .state('app.users.delete', {
        url: '/:id/delete',
        template: '',
        controller: function ($stateParams, $state, UserService) {
          UserService.delete($stateParams.id, function () {
            $state.go('^.list');
          }, function () {
            $state.go('^.list');
          });
        }
      })
      .state('app.users.profile', {
        url: '/profile',
        templateUrl: 'modules/users/views/profile.html',
        controllerAs: 'ctrl',
        controller: function ($state, UserService, user) {
          this.user = user;
          this.formFields = UserService.getFormFields('edit');
          this.formOptions = {};
          this.submit = function () {
            UserService.upsert(this.user).then(function () {
              $state.go('^.profile');
            });
          };
        },
        resolve: {
          user: function (User) {
            return User.getCurrent(function (user) {
              return user;
            }, function (err) {
              console.log(err);
            });
          }
        }
      });
  });
