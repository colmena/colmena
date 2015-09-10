'use strict';
var app = angular.module('com.module.core');

app.service('ApiService', function($q, $http, ENV) {

  this.checkConnection = function() {
    return $q(function(resolve, reject) {
      $http.get(ENV.apiUrl + '/settings')
        .success(resolve)
        .error(reject);
    });
  };

});
