'use strict';
angular.module('com.module.events')
  .config(function ($stateProvider) {
    $stateProvider.state('app.events', {
      abstract: true,
      url: '/events',
      templateUrl: 'modules/events/views/main.html'
    }).state('app.events.list', {
      url: '',
      templateUrl: 'modules/events/views/list.html',
      controllerAs: 'ctrl',
      controller: function (events) {
        this.events = events;
      },
      resolve: {
        events: function (EventsService) {
          return EventsService.getEvents();
        }
      }
    }).state('app.events.add', {
      url: '/add',
      templateUrl: 'modules/events/views/form.html',
      controllerAs: 'ctrl',
      controller: function ($state, EventsService, event) {
        this.event = event;
        this.formFields = EventsService.getFormFields();
        this.formOptions = {};
        this.submit = function () {
          EventsService.upsertEvent(this.event).then(function () {
            $state.go('^.list');
          });
        };
      },
      resolve: {
        event: function () {
          return {};
        }
      }
    }).state('app.events.edit', {
      url: '/:id/edit',
      templateUrl: 'modules/events/views/form.html',
      controllerAs: 'ctrl',
      controller: function ($state, EventsService, event) {
        console.log(event);
        this.event = event;
        this.formFields = EventsService.getFormFields();
        this.formOptions = {};
        this.submit = function () {
          EventsService.upsertEvent(this.event).then(function () {
            $state.go('^.list');
          });
        };
      },
      resolve: {
        event: function ($stateParams, EventsService) {
          return EventsService.getEvent($stateParams.id);
        }
      }
    }).state('app.events.view', {
      url: '/:id',
      templateUrl: 'modules/events/views/view.html',
      controllerAs: 'ctrl',
      controller: function (event) {
        this.event = event;
      },
      resolve: {
        event: function ($stateParams, EventsService) {
          return EventsService.getEvent($stateParams.id);
        }
      }
    }).state('app.events.delete', {
      url: '/:id/delete',
      template: '',
      controllerAs: 'ctrl',
      controller: function ($state, EventsService, event) {
        EventsService.deleteEvent(event.id, function () {
          $state.go('^.list');
        }, function () {
          $state.go('^.list');
        });
      },
      resolve: {
        event: function ($stateParams, EventsService) {
          return EventsService.getEvent($stateParams.id);
        }
      }
    });
  });
