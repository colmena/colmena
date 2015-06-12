'use strict';
angular
  .module('config',[])
  .service('ENV', function(){
    return {
      apiUrl: 'http://localhost:3000',
      siteUrl: 'http://localhost:3000'
    }
  });
