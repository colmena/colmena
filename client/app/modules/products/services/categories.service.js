'use strict';
var app = angular.module('com.module.products');

app.service('CategoriesService', ['CoreService', 'Category', 'gettextCatalog',
  function (CoreService, Category, gettextCatalog) {

    this.getCategories = function () {
      return Category.find({
        filter: {
          order: 'created DESC',
          include: [
            'products'
          ]
        }
      }).$promise;
    };

    this.getCategory = function (id) {
      return Category.findOne({
        where: {
          id: id
        }
      }).$promise;
    };

    this.upsertCategory = function (category) {
      return Category.upsert(category).$promise
        .then(function () {
          CoreService.toastSuccess(
            gettextCatalog.getString('Category saved'),
            gettextCatalog.getString('Your category is safe with us!')
          );
        })
        .catch(function (err) {
          CoreService.toastSuccess(
            gettextCatalog.getString('Error saving category '),
            gettextCatalog.getString('This category could no be saved: ') + err
          );
        }
      );
    };

    this.deleteCategory = function (id, successCb, cancelCb) {
      CoreService.confirm(
        gettextCatalog.getString('Are you sure?'),
        gettextCatalog.getString('Deleting this cannot be undone'),
        function () {
          Category.deleteById({id: id}, function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Category deleted'),
              gettextCatalog.getString('Your category is deleted!'));
            successCb();
          }, function (err) {
            CoreService.toastError(
              gettextCatalog.getString('Error deleting category'),
              gettextCatalog.getString('Your category is not deleted! ') + err);
            cancelCb();
          });
        },
        function () {
          cancelCb();
        }
      );
    };

    this.getFormFields = function () {
      return [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: gettextCatalog.getString('Name'),
          required: true
        }
      }];
    };

  }
]);
