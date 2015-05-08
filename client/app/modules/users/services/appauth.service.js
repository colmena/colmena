'use strict';

/*jshint sub:true*/
/*jshint camelcase: false */

angular.module('com.module.users')
  .factory('AppAuth', function($cookies, User, LoopBackAuth, $http) {
    return {
      login: function(data, cb) {
        var self = this;
        LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId = null;
        $http.post('/api/users/login?include=user', {
            email: data.email,
            password: data.password
          })
          .then(function(response) {
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
          }, function() {
            console.log('User.login() err', arguments);
            LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId =
              null;
            LoopBackAuth.save();
            cb({});
          });
      },

      logout: function() {
        LoopBackAuth.clearUser();
        LoopBackAuth.save();
        window.location = '/auth/logout';
      },

      currentUser: null,

      ensureHasCurrentUser: function(cb) {
        var self = this;
        if ((!this.currentUser || this.currentUser.id === 'social') && $cookies.accessToken) {
          LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId = null;
          $http.get('/auth/current')
            .then(function(response) {
              if (response.data.id) {
                LoopBackAuth.currentUserId = response.data.id;
                LoopBackAuth.accessTokenId = $cookies.accessToken
              }
              if (LoopBackAuth.currentUserId === null) {
                delete $cookies['accessToken'];
                LoopBackAuth.accessTokenId = null;
              }
              LoopBackAuth.save();
              self.currentUser = response.data;
              var profile = self.currentUser && self.currentUser.profiles &&
                self.currentUser.profiles.length && self.currentUser.profiles[0];
              if (profile) {
                self.currentUser.name = profile.profile.name;
              }
              cb(self.currentUser);
            }, function() {
              console.log('User.getCurrent() err', arguments);
              LoopBackAuth.currentUserId = LoopBackAuth.accessTokenId = null;
              LoopBackAuth.save();
              cb({});
            });
        } else {
          console.log('Using cached current user.');
          cb(self.currentUser);
        }
      }
    };
  });
