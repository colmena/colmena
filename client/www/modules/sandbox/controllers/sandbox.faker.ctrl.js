(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.sandbox')
    .service('FakeService', function($window) {
      this.faker = $window.faker;
    })
    .controller('SandboxFakerCtrl', function($scope, $window, CoreService, FakeService, Event, Post, User, Page, Note) {
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

      $scope.fakePages = function() {
        $scope.faker = [];
        for (var i = 1; i <= $scope.records; i++) {
          var fake = {
            name: FakeService.faker.lorem.sentence(),
            content: FakeService.faker.lorem.paragraph()
          };
          $scope.faker.push(fake);
          Page.create(fake);
        }
        CoreService.toastSuccess('Created ' + $scope.records + ' pages');
      };

      $scope.fakeNotes = function() {
        $scope.faker = [];
        for (var i = 1; i <= $scope.records; i++) {
          var fake = {
            title: FakeService.faker.lorem.sentence(),
            body: FakeService.faker.lorem.paragraph()
          };
          $scope.faker.push(fake);
          Note.create(fake);
        }
        CoreService.toastSuccess('Created ' + $scope.records + ' notes');
      };

      $scope.fakeEvents = function() {
        $scope.faker = [];
        for (var i = 0; i < $scope.records; i++) {
          var fake = {
            name: FakeService.faker.lorem.sentence(),
            description: FakeService.faker.lorem.paragraph(),
            startDate: FakeService.faker.date.future(),
            endDate: FakeService.faker.date.future()
          };
          $scope.faker.push(fake);
          Event.create(fake);
        }
      };

    });

})(window, window.angular);
