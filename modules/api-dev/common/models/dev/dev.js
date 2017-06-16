'use strict';

module.exports = function(Dev) {


  Dev.greet = (msg, cb) => cb(null, 'Greetings... ' + msg)

  Dev.remoteMethod('greet', { accepts: {arg: 'msg', type: 'string'}, returns: {arg: 'greeting', type: 'string'}});

}
