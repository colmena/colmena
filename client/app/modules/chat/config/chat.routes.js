'use strict';
angular.module ('com.module.chat')
  .config(function ($stateProvider) {
    $stateProvider.state('app.chat', {
      abstract: true,
      url: '/chat',
      templateUrl: 'modules/chat/views/main.html'
    }).state('app.chat.list', {
      url: '',
      templateUrl: 'modules/chat/views/chat.html',
      controller: 'ChatCtrl'
    });
  });
