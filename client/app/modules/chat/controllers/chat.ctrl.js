'use strict';
angular.module ('com.module.chat')
  .controller ('ChatCtrl', function ($scope, User, Chat) {

  // Get current User
  $scope.user = User.getCurrent ();
  $scope.chat = {};
  $scope.messages = [];

  // Connect Socket.io
  Chat.on ('chat message', function (msg) {
    $scope.messages.push (msg);
  });

  // Send Button
  $scope.sendMessage = function (inputMessage) {
    var data = new Date();
    // Format object before send socket.io
    $scope.chat = {
      firstName: $scope.user.fistName ,
      email: $scope.user.email,
      msg: inputMessage
    };

    // Send to Server
    Chat.emit ('chat message', $scope.chat);
    //Clean Input
    $scope.inputMessage = '';
    // Focus Input
    document.getElementById("message").focus();
  };

});
