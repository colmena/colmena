'use strict';
angular.module ('com.module.events')
  .config(function ($stateProvider) {
    $stateProvider.state('app.events', {
      abstract: true,
      url: '/events',
      templateUrl: 'modules/events/views/main.html',
      controller: 'EventsCtrl'
    }).state('app.events.list', {
      url: '',
      templateUrl: 'modules/events/views/list.html',
      controller: 'EventsCtrl'
    }).state('app.events.add', {
      url: '/add',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/events/views/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.view', {
      url: '/:id',
      templateUrl: 'modules/events/views/view.html',
      controller: 'EventsCtrl'
    });
  });
