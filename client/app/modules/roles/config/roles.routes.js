(function () {
  'use strict';

  angular
    .module('com.module.roles')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.roles', {
          abstract: true,
          url: '/roles',
          templateUrl: 'modules/roles/views/main.html',
          data: {
            permissions: {
              only: ['admin'],
              redirectTo: function () {
                // I don't know how to use toasty here
                // CoreService.toastWarning('Error 401 received',
                //     'You don not have the requird permissions. Redirecting to dashboard'
                //     );
                return 'app.home';
              }
            }
          }
        })
        .state('app.roles.list', {
          url: '',
          templateUrl: 'modules/roles/views/list.html',
          controllerAs: 'ctrl',
          controller: function (roles) {
            this.roles = roles;
          },
          resolve: {
            roles: function (RoleService) {
              return RoleService.find();
            }
          }
        })
        .state('app.roles.add', {
          url: '/add',
          templateUrl: 'modules/roles/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, RoleService, role) {
            this.editorOptions = {
              theme: 'monokai',
              lineWrapping: true,
              lineNumbers: true,
              mode: 'markdown'
            };
            this.role = role;
            this.formFields = RoleService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              RoleService.upsert(this.role).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            role: function () {
              return {
                content: '# Hi!\n\n## This is a markdown editor.\n\n    fine code goes here \n\n- lists \n- go \n- here ' +
                '\n\n*Find* **more information** about `markdown` [Here](https://daringfireball.net/projects/markdown/basics)!'
              };
            }
          }
        })
        .state('app.roles.edit', {
          url: '/:id/edit',
          templateUrl: 'modules/roles/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, RoleService, role) {
            this.role = role;
            this.formFields = RoleService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              RoleService.upsert(this.role).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            role: function ($stateParams, RoleService) {
              return RoleService.findById($stateParams.id);
            }
          }
        })
        .state('app.roles.view', {
          url: '/:id',
          templateUrl: 'modules/roles/views/view.html',
          controllerAs: 'ctrl',
          controller: function (role) {
            this.role = role;
          },
          resolve: {
            role: function ($stateParams, RoleService) {
              return RoleService.findById($stateParams.id);
            }
          }
        })
        .state('app.roles.delete', {
          url: '/:id/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($stateParams, $state, RoleService) {
            RoleService.delete($stateParams.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          }
        });
    });

})();
