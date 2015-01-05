'use strict';
angular.module ('com.module.events')
  .run (function ($rootScope, Event) {
  $rootScope.addMenu('Events','app.events.list','fa-calendar-o');

  Event.find (function (data) {
    $rootScope.addDashboardBox ('Events', 'bg-green', 'ion-calendar', data.length, 'app.events.list');
  });

});
