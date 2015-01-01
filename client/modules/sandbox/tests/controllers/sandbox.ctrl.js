'use strict';

describe('Controller: SandboxCtrl', function () {

  // load the controller's module
  beforeEach(module('loopbackApp'));

  var SandboxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SandboxCtrl = $controller('SandboxCtrl', {
      $scope: scope
    });
  }));


});
