'use strict';
angular.module ('com.module.events')
  .controller('EventsCtrl', function ($scope, $state, $stateParams, toasty, Event, SweetAlert) {

    var eventId = $stateParams.id;

    var createDate = function (date, time) {

      console.log(date);
      console.log(time);
      if (!date || !time) {
        return date || time;
      }

      var out = angular.copy(time);
      out.setFullYear(date.getFullYear());
      out.setMonth(date.getMonth());
      out.setDate(date.getDate());
      return out;
    };

    var splitDate = function () {
      var event = $scope.event;
      event.sDate = event.sTime = event.startTime;
      event.eDate = event.eTime = Date.parse(event['end_time']);
      //      event['start_time'] =  event['end_time'] = null;
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
      SweetAlert.swal({
        title: 'Are you sure?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55'
      }, function (isConfirm) {
        if (isConfirm) {
          Event.deleteById(id, function () {
            toasty.pop.success({title: 'Event deleted', msg: 'Your event is deleted!', sound: false});
            loadItems();
            $state.go('app.events.list');
            console.log();
          }, function (err) {
            toasty.pop.error({title: 'Error deleting event', msg: 'Your event is not deleted: ' + err, sound: false});
          });
        } else {
          return false;
        }
      });
    };

    var dateOpen = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      this.opened = true;
    };

    $scope.formFields = [{
                           key: 'name',
                           label: 'Name',
                           type: 'text',
                           required: true
                         },{
                           key: 'description',
                           type: 'text',
                           label: 'Description',
                           required: true
                         }, {
                           key: 'sDate',
                           required: true,
                           label: 'Start Date',
                           type: 'date',
                           format: 'dd/MM/yyyy',
                           opened: false,
                           switchOpen: dateOpen
                         }, {
                           key: 'sTime',
                           required: true,
                           label: 'Start Time',
                           type: 'time',
                           hstep: 1,
                           mstep: 5,
                           ismeridian: true
                         }, {
                           key: 'eDate',
                           label: 'End',
                           type: 'date',
                           format: 'dd/MM/yyyy',
                           opened: false,
                           switchOpen: dateOpen
                         }, {
                           key: 'eTime',
                           required: true,
                           label: 'End Time',
                           type: 'time',
                           hstep: 1,
                           mstep: 5,
                           ismeridian: true
                         }

    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };
    $scope.alerts = [];

    $scope.onSubmit = function () {
      var event = $scope.event;

      event['start_time'] = createDate(event.sDate, event.sTime);
      event.sDate = null;
      event.sTime = null;

      event['end_time'] = createDate(event.eDate, event.eTime);
      event.eDate = null;
      event.eTime = null;

      Event.upsert($scope.event, function () {
        toasty.pop.success(
          {title: 'Event saved',
            msg: 'Your event is safe with us!',
            sound: false});
        $state.go('^.list');
      }, function (err) {
        $scope.alerts.push({type: 'danger', msg: err.data.error.message});
        toasty.pop.error(
          {title: 'Event not added',
            msg: err.data.error.message,
            sound: false});
        console.log(err);
      });
    };


  });
