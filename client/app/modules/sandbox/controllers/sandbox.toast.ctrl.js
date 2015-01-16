'use strict';
angular.module ('com.module.sandbox')
  .controller ('SandboxToastsCtrl', function ($scope, $http, toasty) {
    $scope.toasty = {
      title: 'Notify me!',
      text: 'This is the body!'
    };

    $scope.toast = function () {
      toasty.pop.success ({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.warning ({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.wait ({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.error ({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.info ({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
    };
  });
