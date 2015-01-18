'use strict';
angular.module('com.module.files')
  .controller('FilesCtrl', function ($scope, $http, CoreService, ENV, toasty, gettextCatalog) {

    $scope.load = function () {
      $http.get(ENV.apiUrl + '/containers/files/files').success(function (data) {
        console.log(data);
        $scope.files = data;
      });
    };

    $scope.delete = function (index, id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        $http.delete(ENV.apiUrl + '/containers/files/files/' + encodeURIComponent(id)).success(function (data, status, headers) {
          console.log(data);
          console.log(status);
          console.log(headers);
          $scope.files.splice(index, 1);
          toasty.pop.success({
            title: gettextCatalog.getString('File deleted'),
            msg: gettextCatalog.getString('Your file is deleted!'),
            sound: false
          });
        });
      }, function () {
        return false;
      });
    };

    $scope.$on('uploadCompleted', function (event) {
      console.log('uploadCompleted event received');
      console.log(event);
      $scope.load();
    });

  });
