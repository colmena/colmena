'use strict';

describe('Directive: adminHeader', function () {

  // load the directive's module
  beforeEach(module('loopbackApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-header></admin-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the adminHeader directive');
  }));
});
