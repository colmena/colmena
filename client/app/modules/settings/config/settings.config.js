'use strict';
angular.module ('com.module.settings')
  .run (function ($rootScope, Setting) {
  $rootScope.addMenu ('Settings', 'app.settings.list', 'fa-cog');

  $rootScope.getSetting = function (key) {
    var valor = '';
    angular.forEach ($rootScope.settings.data, function (item) {
      if (item.key === key) {
        valor = item.value;
      }
    });
    return valor;
  };

  $rootScope.setSetting = function (key, value) {

    Setting.find ({
      filter: {
        where: {
          key: key
        }
      }
    }, function (data) {

      if (data.length) {
        data[0].value = value;
        data[0].$save ();
      } else {
        Setting.create ({
          key: key,
          value: value
        }, function (data) {
          console.log (data);
        });
      }
      $rootScope.loadSettings ();
    });
  };

  $rootScope.settings = {};

  $rootScope.loadSettings = function () {
    Setting.find (function (settings) {
      $rootScope.settings.data = settings;
    });
  };


});
