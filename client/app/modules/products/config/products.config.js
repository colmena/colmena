'use strict';
angular.module ('com.module.pages')
  .run (function ($rootScope, Product, Category) {
  $rootScope.addMenu ('Products', 'app.products.list', 'fa-file');

  Product.find (function (data) {
    $rootScope.addDashboardBox ('Products', 'bg-blue', 'ion-document-text', data.length, 'app.products.list');
  });

  Category.find (function (data) {
    $rootScope.addDashboardBox ('Category Products', 'bg-blue', 'ion-document-text', data.length, 'app.products.list');
  });

});

