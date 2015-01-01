'use strict';
angular.module ('com.module.core')
  .factory ('AppAuth', [
  function () {
    return {
      currentUser: null,

      // Note: we can't make the User a dependency of AppAuth
      // because that would create a circular dependency
      //   AppAuth <- $http <- $resource <- LoopBackResource <- User <- AppAuth
      ensureHasCurrentUser: function (User) {
        if (this.currentUser) {
          console.log ('Using cached current user.');
        } else {
          console.log ('Fetching current user from the server.');
          this.currentUser = User.getCurrent (function () {
            // success
          }, function (response) {
            console.log ('User.getCurrent() err', arguments, response);
          });
        }
      }
    };
  }
]);
