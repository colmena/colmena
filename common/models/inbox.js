'use strict';

var loopback = require('loopback');
var app = module.exports = loopback();
app.io = require('socket.io')(app.start());

module.exports = function(Inbox) {

  Inbox.beforeCreate = function() {

    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        app.io.emit('chat message', msg);
      });
  };

  Inbox.afterCreate = function() {

  };

};
