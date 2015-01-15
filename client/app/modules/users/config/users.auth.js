'use strict';
angular.module ('com.module.users')
  .config (function ($routeProvider, $httpProvider) {

  // Intercept 401 responses and redirect to login screen
  $httpProvider.interceptors.push (function ($q, $location, AppAuth, toasty) {
    return {
      responseError: function (rejection) {

        if (rejection.status === 401) {
          AppAuth.currentUser = null;
          // save the current location so that login can redirect back
          $location.nextAfterLogin = $location.path ();

          if ($location.path () === '/router' || $location.path () === '/login') {
            console.log ('401 while on router on login path');
          } else {
            if ($location.path () !== '/register') {
              $location.path ('/login');
            }
            toasty.pop.warning ({
              title: 'Error 401 received',
              msg: 'We received a 401 error from the API! Redirecting to login',
              sound: false
            });
          }
        }
        if (rejection.status === 404) {
          console.log (rejection);
          toasty.pop.error ({title: 'Error 404 received', msg: rejection.data.error.message, sound: false});
        }
        if (rejection.status === 422) {
          console.log (rejection);
          toasty.pop.error ({title: 'Error 422 received', msg: rejection.data.error.message, sound: false});
        }
        if (rejection.status === 0) {
          $location.path ('/');
          toasty.pop.error ({
            title: 'Connection Refused',
            msg: 'The connection to the API is refused. Please verify that the API is running!',
            sound: false
          });
        }
        return $q.reject (rejection);
      }
    };
  });
});
