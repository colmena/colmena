'use strict';
angular.module('com.module.products')
  .controller('ProductsCtrl', function ($scope, $state, $stateParams, CoreService, gettextCatalog, Product, Category) {

    var productId = $stateParams.id;
    var categoryId = $stateParams.categoryId;

    if (productId) {
      $scope.product = Product.findById({
        id: productId
      }, function (product) {
        product.category = Product.category({id: product.id});
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.product = {};
    }

    if (categoryId) {
      $scope.product.categoryId = categoryId;
    }

    function loadItems() {
      $scope.categories = [];
      Category.find(function (categories) {
        angular.forEach(categories, function (category) {
          category.products = Category.products({id: category.id});
          this.push(category);
        }, $scope.categories);
      });
    }

    loadItems();

    $scope.delete = function (id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        Product.deleteById(id, function () {
          CoreService.toastSuccess(gettextCatalog.getString('Product deleted'), gettextCatalog.getString('Your product is deleted!'));
          loadItems();
          $state.go('app.products.list');
        }, function (err) {
          CoreService.toastError(gettextCatalog.getString('Error deleting product'), gettextCatalog.getString('Your product is not deleted: ') + err);
        });
      }, function () {
        return false;
      });
    };

    $scope.deletecategory = function (id) {


      Category.deleteById(id, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Category deleted'), gettextCatalog.getString('Your category is deleted!'));
        loadItems();
      }, function (err) {
        CoreService.toastError(gettextCatalog.getString('Error deleting category'), gettextCatalog.getString('Your category is not deleted: ') + err);
      });


    };

    $scope.formFields = [
      {
        key: 'name',
        type: 'text',
        label: gettextCatalog.getString('Name'),
        required: true
      },
      {
        key: 'categoryId',
        type: 'text',
        label: gettextCatalog.getString('Category'),
        required: true
      },
      {
        key: 'description',
        type: 'text',
        label: gettextCatalog.getString('Description')
      },
      {
        key: 'percentage',
        type: 'text',
        label: gettextCatalog.getString('Percentage')
      },
      {
        key: 'price',
        type: 'text',
        label: gettextCatalog.getString('Price')
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: gettextCatalog.getString('Save')
    };

    $scope.onSubmit = function () {
      Product.upsert($scope.product, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Product saved'), gettextCatalog.getString('Your product is safe with us!'));
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
