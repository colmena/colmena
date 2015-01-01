'use strict';

describe('Directive: adminHeader', function () {

  // load the directive's module
  beforeEach(module('com.module.core'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden elemexnt visible', inject(function ($compile) {
    element = angular.element('<admin-header></admin-header>');
    element = $compile(element)(scope);

  }));
});
