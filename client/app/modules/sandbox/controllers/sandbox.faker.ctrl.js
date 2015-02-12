'use strict';
var app = angular.module('com.module.sandbox');
app.controller('SandboxFakerCtrl', function($scope, $window, CoreService,
  FakeService, Event, Post, User) {

  $scope.faker = [];

  $scope.records = 10;

  console.log(FakeService);

  $scope.fakeUsers = function() {
    $scope.faker = [];
    for (var i = 0; i < $scope.records; i++) {
      var fake = {
        email: FakeService.faker.internet.email(),
        userName: FakeService.faker.internet.userName(),
        firstName: FakeService.faker.name.firstName(),
        lastName: FakeService.faker.name.lastName(),
        password: FakeService.faker.internet.password()
      };
      $scope.faker.push(fake);
      User.create(fake);
    }
    CoreService.toastSuccess('Created ' + $scope.records + ' users');
  };

  $scope.fakePosts = function() {
    $scope.faker = [];
    for (var i = 1; i <= $scope.records; i++) {
      var fake = {
        title: FakeService.faker.lorem.sentence(),
        content: FakeService.faker.lorem.paragraph(),
        image: FakeService.faker.image.imageUrl()
      };
      $scope.faker.push(fake);
      Post.create(fake);
    }
    CoreService.toastSuccess('Created ' + $scope.records + ' posts');
  };

  $scope.fakeEvents = function() {
    $scope.faker = [];
    for (var i = 0; i < $scope.records; i++) {
      var fake = {
        name: FakeService.faker.lorem.sentence(),
        description: FakeService.faker.lorem.paragraph(),
        startTime: FakeService.faker.date.future(),
        endTime: FakeService.faker.date.future()
      };
      $scope.faker.push(fake);
      Event.create(fake);
    }
  };

});


app.service('FakeService', function($window) {
  this.faker = $window.faker;
});
