'use strict';
angular.module('com.module.products')
  .run(function ($rootScope, Product, Category, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Products'), 'app.products.list', 'fa-file');

    Product.find(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Products'), 'bg-yellow', 'ion-bag', data.length, 'app.products.list');
    });

    Category.find(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Categories'), 'bg-aqua', 'ion-bag', data.length, 'app.products.list');
    });

  });

