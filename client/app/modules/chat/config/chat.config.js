'use strict';
angular.module('com.module.chat')
  .run(function ($rootScope, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Chat'), 'app.chat.list', 'fa-weixin');

  });
