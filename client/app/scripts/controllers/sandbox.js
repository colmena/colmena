'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the loopbackApp
 */
var app = angular.module('loopbackApp');
app.config(function ($stateProvider) {
  $stateProvider.state('app.sandbox', {
    abstract: true,
    url: '/sandbox',
    templateUrl: 'views/sandbox/main.html',
    controller: 'SandboxCtrl'
  }).state('app.sandbox.index', {
    url: '',
    controller: function ($state) {
      $state.go('app.sandbox.alerts');
    }
  }).state('app.sandbox.forms', {
    url: '/forms',
    templateUrl: 'views/sandbox/forms.html',
    controller: 'SandboxFormsCtrl'
  }).state('app.sandbox.alerts', {
    url: '/alerts',
    templateUrl: 'views/sandbox/alerts.html',
    controller: 'SandboxAlertsCtrl'
  }).state('app.sandbox.bootstrap', {
    url: '/bootstrap',
    templateUrl: 'views/sandbox/bootstrap.html'
  }).state('app.sandbox.trees', {
    url: '/trees',
    templateUrl: 'views/sandbox/trees.html',
    controller: 'SandboxTreesCtrl'
  }).state('app.sandbox.users', {
    url: '/users',
    template: '<pre>{{users | json}}</pre>',
    controller: function ($scope, User) {
      $scope.users = User.find({}, function (err, data) {
        console.log(data);
        return;
      });
    }
  });
});

app.controller('SandboxCtrl', function ($scope) {
  $scope.items = [
    {
      name: 'Alerts',
      sref: '.alerts'
    },
    {
      name: 'Forms',
      sref: '.forms'
    },
    {
      name: 'Bootstrap',
      sref: '.bootstrap'
    },
    {
      name: 'Trees',
      sref: '.trees'
    }
  ];
});

app.controller('SandboxToastsCtrl', function ($scope, $http, toasty) {
  $scope.toasty = {
    title: 'Notify me!',
    text: 'This is the body!'
  };

  $scope.toast = function () {
    toasty.pop.success({
      title: $scope.toasty.title,
      msg: $scope.toasty.text,
      sound: false
    });
    toasty.pop.warning({
      title: $scope.toasty.title,
      msg: $scope.toasty.text,
      sound: false
    });
    toasty.pop.wait({
      title: $scope.toasty.title,
      msg: $scope.toasty.text,
      sound: false
    });
    toasty.pop.error({
      title: $scope.toasty.title,
      msg: $scope.toasty.text,
      sound: false
    });
    toasty.pop.info({
      title: $scope.toasty.title,
      msg: $scope.toasty.text,
      sound: false
    });
  };
});

app.controller('SandboxTreesCtrl', function ($scope, $timeout) {
  var appleSelected, tree, treedataAvm, treedataGeography;
  $scope.myTreeHandler = function (branch) {
    var _ref;
    $scope.output = 'You selected: ' + branch.label;
    if ((_ref = branch.data) !== null ? _ref.description : void 0) {
      return $scope.output += '(' + branch.data.description + ')';
    }
  };
  appleSelected = function (branch) {
    $scope.output = 'APPLE! : ' + branch.label;
    return $scope.output;
  };
  treedataAvm = [
    {
      label: 'Animal',
      children: [
        {
          label: 'Dog',
          data: {
            description: 'man\'s best friend'
          }
        },
        {
          label: 'Cat',
          data: {
            description: 'Felis catus'
          }
        },
        {
          label: 'Hippopotamus',
          data: {
            description: 'hungry, hungry'
          }
        },
        {
          label: 'Chicken',
          children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
        }
      ]
    },
    {
      label: 'Vegetable',
      data: {
        definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        dataCanContainAnything: true
      },
      onSelect: function (branch) {
        $scope.output = 'Vegetable: ' + branch.data.definition;
        return $scope.output;
      },
      children: [
        {
          label: 'Oranges'
        },
        {
          label: 'Apples',
          children: [
            {
              label: 'Granny Smith',
              onSelect: appleSelected
            },
            {
              label: 'Red Delicous',
              onSelect: appleSelected
            },
            {
              label: 'Fuji',
              onSelect: appleSelected
            }
          ]
        }
      ]
    },
    {
      label: 'Mineral',
      children: [
        {
          label: 'Rock',
          children: ['Igneous', 'Sedimentary', 'Metamorphic']
        },
        {
          label: 'Metal',
          children: ['Aluminum', 'Steel', 'Copper']
        },
        {
          label: 'Plastic',
          children: [
            {
              label: 'Thermoplastic',
              children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
            },
            {
              label: 'Thermosetting Polymer',
              children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
            }
          ]
        }
      ]
    }
  ];
  treedataGeography = [
    {
      label: 'North America',
      children: [
        {
          label: 'Canada',
          children: ['Toronto', 'Vancouver']
        },
        {
          label: 'USA',
          children: ['New York', 'Los Angeles']
        },
        {
          label: 'Mexico',
          children: ['Mexico City', 'Guadalajara']
        }
      ]
    },
    {
      label: 'South America',
      children: [
        {
          label: 'Venezuela',
          children: ['Caracas', 'Maracaibo']
        },
        {
          label: 'Brazil',
          children: ['Sao Paulo', 'Rio de Janeiro']
        },
        {
          label: 'Argentina',
          children: ['Buenos Aires', 'Cordoba']
        }
      ]
    }
  ];
  $scope.myTreeData = treedataAvm;
  $scope.tryChangingTheTreeData = function () {
    if ($scope.myTreeData === treedataAvm) {
      $scope.myTreeData = treedataGeography;
      return $scope.myTreeData;
    } else {
      $scope.myTreeData = treedataAvm;
      return $scope.myTreeData;
    }
  };
  $scope.myTree = tree = {};
  $scope.tryAsyncLoad = function () {
    $scope.myTreeData = [];
    $scope.doingAsync = true;
    return $timeout(function () {
      if (Math.random() < 0.5) {
        $scope.myTreeData = treedataAvm;
      } else {
        $scope.myTreeData = treedataGeography;
      }
      $scope.doingAsync = false;
      return tree.expandAll();
    }, 1000);
  };
  $scope.tryAddingABranch = function () {
    var b;
    b = tree.getSelectedBranch();
    return tree.addBranch(b, {
      label: 'New Branch',
      data: {
        something: 42,
        'else': 43
      }
    });
  };
  return $scope.tryAddingABranch;
});
app.controller('SandboxFormsCtrl', function ($scope, $http, toasty, SweetAlert) {

  $scope.formData = {};

  $scope.formFields = [
    {
      key: 'name',
      type: 'text',
      label: 'Name',
      required: true
    },
    {
      key: 'description',
      type: 'text',
      label: 'Description',
      required: true
    },
    {
      key: 'startDate',
      required: true,
      label: 'Start Date',
      type: 'date',
      format: 'dd/MM/yyyy'
    },
    {
      key: 'startTime',
      required: true,
      label: 'Start Time',
      type: 'time',
      hstep: 1,
      mstep: 5,
      ismeridian: true
    },
    {
      key: 'endDate',
      label: 'End',
      type: 'date',
      format: 'dd/MM/yyyy'
    },
    {
      key: 'endTime',
      required: true,
      label: 'End Time',
      type: 'time',
      hstep: 1,
      mstep: 5,
      ismeridian: true
    }
  ];

  $scope.formOptions = {
    hideSubmit: false,
    submitCopy: 'Submit'
  };

  $scope.onSubmit = function () {
    SweetAlert.swal('Good job!', 'Well done, ' + $scope.formData.name, 'success');
  };
});

app.controller('SandboxAlertsCtrl', function ($scope, SweetAlert) {
  $scope.demo1 = function () {
    SweetAlert.swal('Here\'s a message');
  };
  $scope.demo2 = function () {
    SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
  };
  $scope.demo3 = function () {
    SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
  };
  $scope.demo4 = function () {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'Your will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!'
    }, function () {
      SweetAlert.swal('Booyah!');
    });
  };
  $scope.demo5 = function () {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'Your will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!',
      closeOnConfirm: false,
      closeOnCancel: false
    }, function (isConfirm) {
      if (isConfirm) {
        SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
      } else {
        SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };
  $scope.demo6 = function () {
    SweetAlert.swal({
      title: 'Sweet!',
      text: 'Here\'s a custom image.',
      imageUrl: 'http://oitozero.com/img/avatar.jpg'
    });
  };
});

app.controller('SandboxBootstrapAlertCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function () {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function (index) {
    $scope.alerts.splice(index, 1);
  };
});

app.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function () {
    $scope.dt = new Date();
  };
  $scope.today();
  $scope.clear = function () {
    $scope.dt = null;
  };
  $scope.disabled = function (date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };
  $scope.toggleMin = function () {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
