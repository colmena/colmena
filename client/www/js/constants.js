(function(window, angular, undefined) {
  'use strict';

  angular.module("config", [])

  .constant("ENV", {
    "apiUrl": "http://0.0.0.0:3000/api/",
    "siteUrl": "http://0.0.0.0:3000"
  })

  ;
})(window, window.angular);
