'use strict';
var app = angular.module('com.module.users');

app.service('UserService', ['$state', 'CoreService', 'User', 'gettextCatalog',
  function ($state, CoreService, User, gettextCatalog) {

    this.find = function () {
      return User.find().$promise;
    };

    this.findById = function (id) {
      return User.findById({
        id: id
      }).$promise;
    };

    this.upsert = function (user) {
      return User.upsert(user).$promise
        .then(function () {
          CoreService.toastSuccess(
            gettextCatalog.getString('User saved'),
            gettextCatalog.getString('Your user is safe with us!')
          );
        })
        .catch(function (err) {
          CoreService.toastError(
            gettextCatalog.getString('Error saving user '),
            gettextCatalog.getString('This user could no be saved: ' + err)
          );
        }
      );
    };

    this.delete = function (id, successCb, cancelCb) {
      CoreService.confirm(
        gettextCatalog.getString('Are you sure?'),
        gettextCatalog.getString('Deleting this cannot be undone'),
        function () {
          User.deleteById({id: id}, function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('User deleted'),
              gettextCatalog.getString('Your user is deleted!'));
            successCb();
          }, function (err) {
            CoreService.toastError(
              gettextCatalog.getString('Error deleting user'),
              gettextCatalog.getString('Your user is not deleted! ') + err);
            cancelCb();
          });
        },
        function () {
          cancelCb();
        }
      );
    };


    this.getFormFields = function (formType) {
      var form = [{
        key: 'username',
        type: 'input',
        templateOptions: {
          label: gettextCatalog.getString('Username'),
          required: true
        }
      }, {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: gettextCatalog.getString('Email'),
          required: true
        }
      }, {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: gettextCatalog.getString('Last name'),
          required: true
        }
      }, {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: gettextCatalog.getString('Last name'),
          required: true
        }
      }];
      if (formType === 'add') {
        form.push({
          key: 'password',
          type: 'input',
          templateOptions: {
            label: gettextCatalog.getString('Password'),
            required: true
          }
        });
      }
      return form;
    };

  }
]);
