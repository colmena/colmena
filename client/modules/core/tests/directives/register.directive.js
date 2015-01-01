'use strict';

describe('Directive: register', function () {

  // load the directive's module
  beforeEach(module('com.module.core'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<register></register>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the register directive');
  }));
});
