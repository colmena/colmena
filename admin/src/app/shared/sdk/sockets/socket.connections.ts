/* tslint:disable */
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module SocketConnections
* @license MTI
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web and NativeScript 2.
**/
import { SocketDriver } from './socket.driver';
import { AccessToken } from '../models';
export class SocketConnections {
  private static connections: any = {};
  private static configured: boolean  = false;
  static getHandler(url: string, token: AccessToken) {
    if (!SocketConnections.connections[url]) {
      console.log('Creating a new connection with: ', url);
      let config: any = { log: false, secure: false, forceWebsockets: true };
      SocketConnections.connections[url] = SocketDriver.connect(url, config);
      SocketConnections.connections[url].on('connect', () => {
        if (!SocketConnections.configured) 
        SocketConnections.setupConnection(url, token, config);
      });
      let forceConfig: any = setInterval(() => {
        if (!SocketConnections.configured && SocketConnections.connections[url].connected) {
          console.info('Forcing IO Configuration');
          SocketConnections.setupConnection(url, token, config);
          clearInterval(forceConfig);
        } else if (SocketConnections.configured) {
          clearInterval(forceConfig);
        }
      }, 1000)
    } else {
      console.log('Reusing existing connection: ', url);
    }
    return SocketConnections.connections[url];
  }

  private static setupConnection(url: string, token: AccessToken, config: any): void {
    SocketConnections.configured = true;
    console.log('Connected to %s', url);
    SocketConnections.connections[url].emit('authentication', token);
    SocketConnections.connections[url].on('unauthorized', (res: any) => console.error('Unauthenticated', res));
    setInterval(() => SocketConnections.connections[url].emit('lb-ping'), 15000);
    SocketConnections.connections[url].on('lb-pong', (data: any) => console.info('Heartbeat: ', data));
    SocketConnections.connections[url].on('disconnect', (data: any) => {
      console.info('Unexpected disconnection from IO - Socket IO will try to reconnect');
    });
  }
}
