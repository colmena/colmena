(function () {
    'use strict';
    angular
        .module('com.module.roles')
        .service('RoleService', function (
            $state,
            CoreService,
            Role,
            gettextCatalog,
            User,
            LoopBackAuth
            ) {
            var self = this;
            this.find = function () {
                return Role.find();
            };

            this.findById = function (id) {
                return Role.findById({ id: id });
            };

            this.upsert = function (data) {
                return Role.upsert(data).$promise
                    .then(function (role) {
                        CoreService.toastSuccess(
                            gettextCatalog.getString('Role saved'),
                            gettextCatalog.getString('Your role is safe with us!')
                            );
                        role = '';
                    })
                    .catch(function (err) {
                        CoreService.toastError(
                            gettextCatalog.getString('Error saving role '),
                            gettextCatalog.getString('This role could no be saved: ' + err)
                            );
                    }
                        );

            };

            this.delete = function (id, successCb, cancelCb) {
                CoreService.confirm(
                    gettextCatalog.getString('Are you sure?'),
                    gettextCatalog.getString('Deleting this cannot be undone'),
                    function () {
                        Role.deleteById({ id: id }, function () {
                            CoreService.toastSuccess(
                                gettextCatalog.getString('Role deleted'),
                                gettextCatalog.getString('Your role is deleted!'));
                            successCb();
                        }, function (err) {
                            CoreService.toastError(
                                gettextCatalog.getString('Error deleting role'),
                                gettextCatalog.getString('Your role is not deleted! ') + err);
                            cancelCb();
                        });
                    },
                    function () {
                        cancelCb();
                    }
                    );
            };


            this.getFormFields = function () {
                var form = [
                    {
                        key: 'id',
                        type: 'input',
                        templateOptions: {
                            label: '',
                            'type': 'hidden',
                            // required: true
                        }
                    },
                    {
                        key: 'name',
                        type: 'input',
                        templateOptions: {
                            label: 'Name',
                        }
                    },
                    {
                        key: 'description',
                        type: 'textarea',
                        templateOptions: {
                            label: 'Description',
                        }
                    }
                ];
                return form;
            };
        });

})();
