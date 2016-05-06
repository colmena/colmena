(function () {
  'use strict';

  angular
    .module('com.module.users')
    .factory('AppAuth', function ($cookies, User, LoopBackAuth, $http) {
      var self = {
        login: function (data, cb) {
          LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId = null;
          $http.post('/api/users/login?include=user', {
            email: data.email,
            password: data.password
          })
            .then(function (response) {
              if (response.data && response.data.id) {
                LoopBackAuth.currentUserId = response.data.userId;
                LoopBackAuth.accessTokenId = response.data.id;
              }
              if (LoopBackAuth.currentUserId === null) {
                delete $cookies['accessToken'];
                LoopBackAuth.accessTokenId = null;
              }
              LoopBackAuth.save();
              if (LoopBackAuth.currentUserId && response.data && response.data
                  .user) {
                self.currentUser = response.data.user;
                cb(self.currentUser);

              } else {
                cb({});
              }
            }, function () {
              console.log('User.login() err', arguments);
              LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId =
                null;
              LoopBackAuth.save();
              cb({});
            });
        },

        logout: function (cb) {
          //Destroy the access token.
          User.logout({"access_token": LoopBackAuth.accessTokenId}, function () {
            //Destory both cookies that get created.
            delete $cookies["access_token"];
            delete $cookies["accessToken"];
            //Perform the Passport Logout
            $http.post('/auth/logout');

          });
          self.currentUser = null;
          cb();
        },

        ensureHasCurrentUser: function (cb) {
          if ((!this.currentUser || this.currentUser.id === 'social') && $cookies.accessToken) {
            LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId = null;
            $http.get('/auth/current')
              .then(function (response) {
                if (response.data.id) {
                  LoopBackAuth.currentUserId = response.data.id;
                  LoopBackAuth.accessTokenId = $cookies.accessToken.substring(
                    2, 66);
                }
                if (LoopBackAuth.currentUserId === null) {
                  delete $cookies['accessToken'];
                  LoopBackAuth.accessTokenId = null;
                }
                LoopBackAuth.save();
                self.currentUser = response.data;
                var profile = self.currentUser && self.currentUser.profiles &&
                  self.currentUser.profiles.length && self.currentUser.profiles[
                    0];
                if (profile) {
                  self.currentUser.name = profile.profile.name;
                }
                cb(self.currentUser);
              }, function () {
                console.log('User.getCurrent() err', arguments);
                LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId =
                  null;
                LoopBackAuth.save();
                cb({});
              });
          } else {
            if(self.currentUser){
              console.log('Using cached current user.');
            }
            cb(self.currentUser);
          }
        }
      };
      return self;
    });

})();
