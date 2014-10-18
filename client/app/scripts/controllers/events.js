'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the clientApp
 */
angular.module('loopbackApp')

  .config(function ($stateProvider) {
    $stateProvider.state('app.events', {
      abstract: true,
      url: '/events',
      templateUrl: 'views/events/main.html',
      controller: 'EventsCtrl'
    }).state('app.events.list', {
      url: '',
      templateUrl: 'views/events/list.html',
      controller: 'EventsCtrl'
    }).state('app.events.add', {
      url: '/add',
      templateUrl: 'views/events/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.edit', {
      url: '/:id/edit',
      templateUrl: 'views/events/form.html',
      controller: 'EventsCtrl'
    }).state('app.events.view', {
      url: '/:id',
      templateUrl: 'views/events/view.html',
      controller: 'EventsCtrl'
    });
  })
  .controller('EventsCtrl', function ($scope, $state, $stateParams, toasty, Event) {

    var eventId = $stateParams.id;

//
//    var createDate = function (date, time) {
//      if (!date || !time) {
//        return date || time;
//      }
//
//      var out = angular.copy(time);
//      out.setFullYear(date.getFullYear());
//      out.setMonth(date.getMonth());
//      out.setDate(date.getDate());
//      return out;
//    };

    var splitDate = function () {
      var event = $scope.event;
      event.startDate = event.startTime = event.start;
      event.endDate = event.endTime = event.end;
      event.start = event.end = null;
    };

    if (eventId) {
      $scope.event = Event.findById({
        id: eventId
      }, function () {
        splitDate();
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.event = {};
    }

    function loadItems() {
      $scope.events = Event.find();
    }

    loadItems();

    $scope.delete = function (id) {
      // if (confirm('Are you sure?') === false) {
      //   return false;
      // }
      Event.deleteById(id, function () {
        toasty.pop.success(
          {title: 'Event deleted',
            msg: 'Your event is deleted!',
            sound: false});
        loadItems();
        $state.go('app.events.list');
        console.log();
      }, function (err) {
        toasty.pop.error(
          {title: 'Error deleting event',
            msg: 'Your event is not deleted: ' + err,
            sound: false});
      });
    };
//
//    var dateOpen = function ($event, options) {
//      $event.preventDefault();
//      $event.stopPropagation();
//
//      this.opened = true;
//    };

    $scope.formFields = [
      {
        key: 'name',
        label: 'Name',
        type: 'text',
        required: true
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        required: true
      },
      {
        key: 'location',
        label: 'Location',
        type: 'text'
      },
      {
        key: 'timezone',
        label: 'Timezone',
        type: 'text'
      },
      {
        key: 'url',
        label: 'URL',
        type: 'text'
      },
      {
        key: 'tickets',
        label: 'Ticket URL',
        type: 'text'
      },
      {
        key: 'image',
        label: 'Image URL',
        type: 'text'
      },
      {
        key: 'start_date',
        label: 'Start Date',
        type: 'text',
        required: true
      },
      {
        key: 'start_time',
        label: 'Start Time',
        type: 'text',
        required: true
      },
      {
        key: 'end_date',
        label: 'End Date',
        type: 'text'
      },
      {
        key: 'end_time',
        label: 'End Time',
        type: 'text'
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
//      var event = $scope.event;
//      event.start = createDate(event.start_date, event.start_time);
//      event.start_date = null;
//      event.start_time = null;
//
//      event.end = createDate(event.end_date, event.end_time);
//      event.end_date = null;
//      event.end_time = null;

      console.log($scope.event);
      Event.upsert($scope.event, function () {
        toasty.pop.success(
          {title: 'Event saved',
            msg: 'Your event is safe with us!',
            sound: false});
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };


  });
