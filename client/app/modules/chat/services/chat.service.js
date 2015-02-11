'use strict';
var app = angular.module('com.module.chat');

app.factory('Chat', function ($window, socketFactory) {

    var socket = socketFactory();
    return socket;
  }
);
