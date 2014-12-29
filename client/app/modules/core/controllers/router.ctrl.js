/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.core')
  .controller ('RouteCtrl', function ($q, $scope, $state, $location, AppAuth) {
    if (!AppAuth.currentUser) {
      console.log ('Redirect to login');
      $location.path ('/login');
    } else {
      console.log ('Redirect to app');
      $location.path ('/app');
    }
  });
