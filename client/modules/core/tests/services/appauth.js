'use strict';

describe('Service: AppAuth', function () {

  // load the service's module
  beforeEach(module('loopbackApp'));

  // instantiate service
  var AppAuth;
  beforeEach(inject(function (_AppAuth_) {
    AppAuth = _AppAuth_;
  }));

  it('should do something', function () {
    expect(!!AppAuth).toBe(true);
  });

});
