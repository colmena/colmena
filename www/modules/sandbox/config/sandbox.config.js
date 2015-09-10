'use strict';
angular.module('com.module.sandbox')
  .run(function($rootScope) {
    $rootScope.addMenu('Sandbox', 'app.sandbox.index', 'fa-inbox');
  });
