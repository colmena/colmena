(function () {
  'use strict';
  angular
    .module('com.module.users')
    .service('UserService', function ($state, CoreService, User, Role, gettextCatalog) {
      var self = this;
      this.find = function () {
        return User.find().$promise;
      };

      this.findById = function (id) {
        return User.findById({
          id: id
        }).$promise;
      };

      this.getRoles = function (id) {
        return User.roles({ id: id }).$promise;
      };

      this.upsert = function (user, OldRoles) {
        return User.upsert(user).$promise
          .then(function () {
            self.syncRoles(OldRoles, user);
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

      self.syncRoles = function (oldRoles, user) {
        var newRoles = user.roles;
        Array.prototype.diff = function (a) {
          return this.filter(function (i) { return a.indexOf(i) < 0; });
        };
        var rolesToLink = newRoles.diff(oldRoles);
        var rolesToUnlink = oldRoles.diff(newRoles);

        // Adding roles to user
        angular.forEach(rolesToLink, function (role) {
          User.roles.link({
            id: user.id,
            fk: role
          },
            {
              "id": 0,
              "principalType": "USER",
              "principalId": user.id,
              "roleId": role
            });
        });

        // Removing extra roles from user
        angular.forEach(rolesToUnlink, function (role) {
          User.roles.unlink({ id: user.id, fk: role });
        });
      };
      this.delete = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            User.deleteById({ id: id }, function () {
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
        var form = [
          {
            key: 'username',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Username'),
              required: true
            }
          },
          {
            key: 'email',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Email'),
              required: true
            }
          },
          {
            key: 'firstName',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('First name'),
              required: true
            }
          },
          {
            key: 'lastName',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Last name'),
              required: true
            }
          },
          {
            key: 'roles',
            type: 'selectize',
            templateOptions: {
              label: gettextCatalog.getString('Roles'),
              'options': [],
              'config': {
                valueField: 'id',
                labelField: 'name',
                placeholder: 'Select roles',
                onInitialize: function (selectize) {
                  Role.find().$promise
                    .then(function (roles) {
                      selectize.addOption(roles);
                    });
                },
                'closeAfterSelect': true
                // maxItems: 1
              }
            }
          }
        ];
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

    });

})();
