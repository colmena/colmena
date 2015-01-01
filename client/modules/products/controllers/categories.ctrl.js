'use strict';
angular.module ('com.module.products')
  .controller ('CategoriesCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'toasty',
  'Category',
  function ($scope, $state, $stateParams, toasty, Category) {
    var categoryId = $stateParams.categoryId;
    if (categoryId) {
      $scope.category = Category.findById ({
        id: categoryId
      }, function (category) {
        $scope.products = Category.products ({id: category.id});
      }, function (err) {
        console.log (err);
      });
    } else {
      $scope.category = {};
    }

    $scope.formFields = [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      Category.upsert ($scope.category, function () {
        toasty.pop.success ({title: 'Category saved', msg: 'Your category is safe with us!', sound: false});
        $state.go ('^.list');
      }, function (err) {
        console.log (err);
      });
    };

  }
]);
