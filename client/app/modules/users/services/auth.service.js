'use strict';
angular.module ('com.module.users')
  .factory ('Auth', function ($location, $http, LoopBackAuth, User, ENV) {

  var authUriBase = ENV.apiUrl + 'auth/';

  // Inherit from LoopBackAuth so we don't need to keep modifying it.
  // Note that this method didn't work. I think because a new version of LoopBackAuth was used instead of the singleton.
  //var Auth = Object.create(LoopBackAuth);
  var self = LoopBackAuth;

  /**
   * Returns a url to be used for authentication.
   */
  self.authUri = function (provider) {
    return authUriBase + provider;
  };

  self.currentUser = null;

  /**
   * Gets all available info on authenticated user
   *
   * @return {Object} user
   */
  self.ensureCurrentUser = function () {
    if (self.currentUser) {
      console.log ('Using cached user');
      return self.currentUser;
    }
    if (!self.isLoggedIn ()) {
      console.log ('User not logged in.');
      self.currentUser = null;
      return self.currentUser;
    }
    else {
      // Fetch the actual user data.
      self.currentUser = User.getCurrent (function (userData) {
          console.log ('Current User Fetch Success:', userData);
        },
        function (err) {
          console.log ('Current User Fetch Failed:', err);
        });
    }
    return self.currentUser;
  };

  /**
   * Check if a user is logged in
   *
   * @return {Boolean}
   */
  self.isLoggedIn = function () {
    if (self.currentUserId) {
      return true;
    }
    return false;
  };

  self.logout = function () {
    // Delete the token from the API.
    User.logout ();

    // Delete the user data cached locally.
    self.currentUser = null;
    self.clearUser ();
    self.save ();
  };

  /**
   * Waits for currentUser to resolve before checking if user is logged in
   */
  self.isLoggedInAsync = function (cb) {
    if (self.currentUser.hasOwnProperty ('$promise')) {
      self.currentUser.$promise.then (function () {
        cb (true);
      }).catch (function () {
        cb (false);
      });
    } else if (self.currentUser.hasOwnProperty ('role')) {
      cb (true);
    } else {
      cb (false);
    }
  };

  return self;
});
