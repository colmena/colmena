'use strict';
angular.module('com.module.users')
  .config(function ($routeProvider, $httpProvider) {

    // Intercept 401 responses and redirect to login screen
    $httpProvider.interceptors.push(function ($q, $location, CoreService, AppAuth, gettextCatalog) {
      return {
        responseError: function (rejection) {

          if (rejection.status === 401) {
            AppAuth.currentUser = null;
            // save the current location so that login can redirect back
            $location.nextAfterLogin = $location.path();

            if ($location.path() === '/router' || $location.path() === '/login') {
              console.log('401 while on router on login path');
            } else {
              if ($location.path() !== '/register') {
                $location.path('/login');
              }
              CoreService.toastWarning(gettextCatalog.getString('Error 401 received'), gettextCatalog.getString('We received a 401 error from the API! Redirecting to login'));
            }
          }
          if (rejection.status === 404) {
            console.log(rejection);
            CoreService.toastError(gettextCatalog.getString('Error 404 received'), rejection.data.error.message);
          }
          if (rejection.status === 422) {
            console.log(rejection);
            CoreService.toastError(gettextCatalog.getString('Error 422 received'), rejection.data.error.message);
          }
          if (rejection.status === 0) {
            $location.path('/');
            CoreService.toastError(gettextCatalog.getString('Connection Refused'), gettextCatalog.getString('The connection to the API is refused. Please verify that the API is running!'));
          }
          return $q.reject(rejection);
        }
      };
    });
  });
