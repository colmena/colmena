'use strict';

describe('Controller: AboutCtrl', function() {
  var AboutCtrl,
    scope;

  // load the controller's module
  beforeEach(module('ui.router'));
  beforeEach(module('gettext'));
  beforeEach(module('formly'));
  beforeEach(module('angular-loading-bar'));
  beforeEach(module('lbServices'));
  beforeEach(module('com.module.core'));
  beforeEach(module('com.module.settings'));
  beforeEach(module('com.module.about'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.angular).toBeDefined();
  });

});
