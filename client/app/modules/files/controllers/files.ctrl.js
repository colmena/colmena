/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.files')
  .controller ('FilesCtrl', function ($scope, $http, ENV, toasty, SweetAlert) {

  $scope.load = function () {
    $http.get (ENV.apiUrl + '/containers/files/files').success (function (data) {
      console.log (data);
      $scope.files = data;
    });
  };

  $scope.delete = function (index, id) {

    SweetAlert.swal ({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        $http.delete (ENV.apiUrl + '/containers/files/files/' + encodeURIComponent (id)).success (function (data, status, headers) {
          console.log (data);
          console.log (status);
          console.log (headers);
          $scope.files.splice (index, 1);
          toasty.pop.success ({title: 'File deleted', msg: 'Your file is deleted!', sound: false});
        });
      } else {
        return false;
      }
    });


  };

  $scope.$on ('uploadCompleted', function (event) {
    console.log ('uploadCompleted event received');
    console.log (event);
    $scope.load ();
  });

});
