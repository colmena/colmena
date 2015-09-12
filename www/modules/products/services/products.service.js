(function () {
  'use strict';
  angular
    .module('com.module.products')
    .service('ProductsService', function (CoreService, Product, gettextCatalog) {

      this.getProducts = function () {
        return Product.find({
          filter: {
            order: 'created DESC'
          }
        }).$promise;
      };

      this.getProduct = function (id) {
        return Product.findById({
          id: id
        }).$promise;
      };

      this.upsertProduct = function (product) {
        return Product.upsert(product).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Product saved'),
              gettextCatalog.getString('Your product is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastSuccess(
              gettextCatalog.getString('Error saving product '),
              gettextCatalog.getString('This product could no be saved: ') + err
            );
          }
        );
      };

      this.deleteProduct = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Product.deleteById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Product deleted'),
                gettextCatalog.getString('Your product is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting product'),
                gettextCatalog.getString('Your product is not deleted! ') + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };

      this.getFormFields = function (categories) {
        var catOptions = categories.map(function (category) {
          return {
            name: category.name,
            value: category.id
          };
        });
        return [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Name'),
              required: true
            }
          },
          {
            key: 'categoryId',
            type: 'select',
            templateOptions: {
              label: gettextCatalog.getString('Category'),
              required: true,
              options: catOptions
            }
          },
          {
            key: 'description',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Description')
            }
          },
          {
            key: 'price',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Price')
            }
          }
        ];
      };
    });

})();
