'use strict';

describe('Directive: login', function () {

  // load the directive's module
  beforeEach(module('com.module.core'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login></login>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the login directive');
  }));
});
