/* tslint:disable */
import * as io from 'socket.io-client';
export class SocketBrowser {
  connect(url: any, options: any) {
    return io(url, options);
  }
}
