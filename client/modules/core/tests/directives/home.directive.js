'use strict';

describe('Directive: home', function () {

  // load the directive's module
  beforeEach(module('com.module.core'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<home></home>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the home directive');
  }));
});
