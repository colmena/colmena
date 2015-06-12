'use strict';
angular
    .module ('module.sandbox')
    .run (function ($rootScope) {
        $rootScope.addMenu ('Sandbox', 'app.sandbox.index', 'fa-inbox');
    });
