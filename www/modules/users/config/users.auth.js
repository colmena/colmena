'use strict';
angular.module('com.module.users')
  .config(function($routeProvider, $httpProvider) {

    // Intercept 401 responses and redirect to login screen
    $httpProvider.interceptors.push(function($q, $location, CoreService) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //$rootScope.currentUser = null;
            // save the current location so that login can redirect back
            $location.nextAfterLogin = $location.path();

            if ($location.path() === '/router' || $location.path() ===
              '/login') {
              console.log('401 while on router on login path');
            } else {
              if ($location.path() !== '/register') {
                $location.path('/login');
              }
              CoreService.toastWarning('Error 401 received',
                'We received a 401 error from the API! Redirecting to login'
              );
            }
          }
          if (rejection.status === 404) {
            console.log(rejection);
            CoreService.toastError('Error 404 received', rejection.data
              .error.message);
          }
          if (rejection.status === 422) {
            console.log(rejection);
            CoreService.toastError('Error 422 received', rejection.data
              .error.message);
          }
          if (rejection.status === 0) {
            $location.path('/');
            CoreService.toastError('Connection Refused',
              'The connection to the API is refused. Please verify that the API is running!'
            );
          }
          return $q.reject(rejection);
        }
      };
    });
  });
