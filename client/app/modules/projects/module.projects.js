'use strict';
angular.module ('com.module.projects',[])
  .run(function($rootScope){
    $rootScope.addMenu ('Projects', 'app.projects', 'fa-calendar');
  });
