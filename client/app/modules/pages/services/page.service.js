(function () {
  'use strict';
  angular
    .module('com.module.pages')
    .service('PageService', function ($state, CoreService, Page, gettextCatalog) {

      this.find = function () {
        return Page.find().$promise;
      };

      this.findById = function (id) {
        return Page.findById({
          id: id
        }).$promise;
      };

      this.upsert = function (page) {
        return Page.upsert(page).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Page saved'),
              gettextCatalog.getString('Your page is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastError(
              gettextCatalog.getString('Error saving page '),
              gettextCatalog.getString('This page could no be saved: ' + err)
            );
          }
        );
      };

      this.delete = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Page.deleteById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Page deleted'),
                gettextCatalog.getString('Your page is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting page'),
                gettextCatalog.getString('Your page is not deleted! ') + err);
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
            key            : 'name',
            type           : 'input',
            templateOptions: {
              label   : gettextCatalog.getString('Name'),
              required: true
            }
          },
          {
            key            : 'slug',
            type           : 'input',
            templateOptions: {
              label   : gettextCatalog.getString('Slug'),
              required: true
            }
          }
        ];
        return form;
      };

    });

})();
