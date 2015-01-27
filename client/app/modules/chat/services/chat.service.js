'use strict';
angular.module ('com.module.chat')
  .factory ('Chat',
  function (socketFactory) {
    var mySocket = io.connect('');

    mySocket = socketFactory({
      ioSocket: mySocket
    });


    return mySocket;
  }
);
