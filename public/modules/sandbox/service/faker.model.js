'use strict';
angular
    .module ('module.sandbox')
    .service ('FakeService', function ($window) {
    this.faker = $window.faker;
});