/* tslint:disable */
import * as io from 'socket.io-client';
export class SocketDriver {
  static connect(url: any, options: any) {
    return io(url, options);
  }
}
