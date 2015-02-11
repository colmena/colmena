'use strict';
var app = angular.module('com.module.chat');

app.controller('ChatCtrl', function ($scope, $location, $timeout, $anchorScroll, User, Chat) {

  $scope.user = User.getCurrent();
  $scope.users = User.find();
  $scope.chat = {};
  $scope.messages = [];

  $scope.connected = false;

  $timeout(function () {
    $scope.connected = Chat.socket.connected;
  }, 1000);


  console.log(Chat);

  // Connect Socket.io
  Chat.on('chat message', function (msg) {
    $scope.messages.push(msg);
  });

  // Send Button
  $scope.sendMessage = function (inputMessage) {

    // Format object before send socket.io
    $scope.chat = {
      user: $scope.user,
      msg: inputMessage,
      timestamp: Date.now()
    };

    // Send to Server
    Chat.emit('chat message', $scope.chat);
    //Clean Input
    $scope.inputMessage = '';
    // Focus Input
    document.getElementById('message').focus();

    // Scroll to bottom
    $location.hash('bottom');
    $anchorScroll();
  };

  // Triggerd on pressing return
  $scope.keypressCallback = function ($event) {
    $event.preventDefault();
    if ($scope.inputMessage !== '') {
      $scope.sendMessage($scope.inputMessage);
    }
  };

});
