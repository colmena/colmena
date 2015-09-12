(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.core')
    .service('ApiService', function($q, $http, ENV) {

      this.checkConnection = function() {
        return $q(function(resolve, reject) {
          $http.get(ENV.apiUrl + '/settings')
            .success(resolve)
            .error(reject);
        });
      };

    });

})(window, window.angular);
