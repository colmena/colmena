'use strict';
angular.module ('com.module.products')
  .controller ('ProductsCtrl', function ($scope, $state, $stateParams, toasty, Product, Category, SweetAlert) {

  var productId = $stateParams.id;
  var categoryId = $stateParams.categoryId;

  if (productId) {
    $scope.product = Product.findById ({
      id: productId
    }, function (product) {
      product.category = Product.category ({id: product.id});
    }, function (err) {
      console.log (err);
    });
  } else {
    $scope.product = {};
  }

  if (categoryId) {
    $scope.product.categoryId = categoryId;
  }

  function loadItems () {
    $scope.categories = [];
    Category.find (function (categories) {
      angular.forEach (categories, function (category) {
        category.products = Category.products ({id: category.id});
        this.push (category);
      }, $scope.categories);
    });
  }

  loadItems ();

  $scope.delete = function (id) {
    SweetAlert.swal ({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        Product.deleteById (id, function () {
          toasty.pop.success ({title: 'Product deleted', msg: 'Your product is deleted!', sound: false});
          loadItems ();
          $state.go ('app.products.list');
        }, function (err) {
          toasty.pop.error ({
            title: 'Error deleting product',
            msg: 'Your product is not deleted: ' + err,
            sound: false
          });
        });
      } else {
        return false;
      }
    });
  };

  $scope.deletecategory = function (id) {
    SweetAlert.swal ({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        Category.deleteById (id, function () {
          toasty.pop.success ({title: 'Category deleted', msg: 'Your category is deleted!', sound: false});
          loadItems ();
        }, function (err) {
          toasty.pop.error ({
            title: 'Error deleting category',
            msg: 'Your category is not deleted: ' + err,
            sound: false
          });
        });
      } else {
        return false;
      }
    });
  };

  $scope.formFields = [
    {
      key: 'name',
      type: 'text',
      label: 'Name',
      required: true
    },
    {
      key: 'categoryId',
      type: 'text',
      label: 'Category',
      required: true
    },
    {
      key: 'description',
      type: 'text',
      label: 'Description'
    },
    {
      key: 'percentage',
      type: 'text',
      label: 'Percentage'
    },
    {
      key: 'price',
      type: 'text',
      label: 'Price'
    }
  ];

  $scope.formOptions = {
    uniqueFormId: true,
    hideSubmit: false,
    submitCopy: 'Save'
  };

  $scope.onSubmit = function () {
    Product.upsert ($scope.product, function () {
      toasty.pop.success ({title: 'Product saved', msg: 'Your product is safe with us!', sound: false});
      $state.go ('^.list');
    }, function (err) {
      console.log (err);
    });
  };

});
