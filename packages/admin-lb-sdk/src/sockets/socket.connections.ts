/* tslint:disable */
import { Injectable, Inject, NgZone } from '@angular/core';
import { SocketDriver } from './socket.driver';
import { AccessToken } from '../models';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LoopBackConfig } from '../lb.config';
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
@Injectable()
export class SocketConnection {
  private socket: any;
  private subjects: {
    onConnect: Subject<any>,
    onDisconnect: Subject<any>,
    onAuthenticated: Subject<any>,
    onUnAuthorized: Subject<any>
  } = {
    onConnect: new Subject(),
    onDisconnect: new Subject(),
    onAuthenticated: new Subject(),
    onUnAuthorized: new Subject()
  };
  public sharedObservables: {
    sharedOnConnect?: Observable<any>,
    sharedOnDisconnect?: Observable<any>,
    sharedOnAuthenticated?: Observable<any>,
    sharedOnUnAuthorized?: Observable<any>
  } = {};
  public authenticated: boolean = false;
  /**
   * @method constructor
   * @param {SocketDriver} driver Socket IO Driver
   * @param {NgZone} zone Angular 2 Zone
   * @description
   * The constructor will set references for the shared hot observables from
   * the class subjects. Then it will subscribe each of these observables
   * that will create a channel that later will be shared between subscribers.
   **/
  constructor(
    @Inject(SocketDriver) private driver: SocketDriver,
    @Inject(NgZone) private zone: NgZone
  ) {
    this.sharedObservables = {
      sharedOnConnect: this.subjects.onConnect.asObservable().share(),
      sharedOnDisconnect: this.subjects.onDisconnect.asObservable().share(),
      sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().share(),
      sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().share()
    };
    // This is needed to create the first channel, subsequents will share the connection
    // We are using Hot Observables to avoid duplicating connection status events.
    this.sharedObservables.sharedOnConnect.subscribe();
    this.sharedObservables.sharedOnDisconnect.subscribe();
    this.sharedObservables.sharedOnAuthenticated.subscribe();
    this.sharedObservables.sharedOnUnAuthorized.subscribe();
  }
  /**
   * @method connect
   * @param {AccessToken} token AccesToken instance
   * @return {void}
   * @description
   * This method will create a new socket connection when not previously established.
   * If there is a broken connection it will re-connect.
   **/
  public connect(token: AccessToken = null): void {
    if (!this.socket) {
      console.info('Creating a new connection with: ', LoopBackConfig.getPath());
      // Create new socket connection
      this.socket = this.driver.connect(LoopBackConfig.getPath(), {
        log: false,
        secure: LoopBackConfig.isSecureWebSocketsSet(),
        forceNew: true,
        forceWebsockets: true,
        transports: ['websocket']
      });
      // Listen for connection
      this.on('connect', () => {
        this.subjects.onConnect.next('connected');
        // Authenticate or start heartbeat now    
        this.emit('authentication', token);
      });
      // Listen for authentication
      this.on('authenticated', () => {
        this.authenticated = true;
        this.subjects.onAuthenticated.next();
        this.heartbeater();
      })
      // Listen for authentication
      this.on('unauthorized', (err: any) => {
        this.authenticated = false;
        this.subjects.onUnAuthorized.next(err);
      })
      // Listen for disconnections
      this.on('disconnect', (status: any) => this.subjects.onDisconnect.next(status));
    } else if (this.socket && !this.socket.connected){
      if (typeof this.socket.off === 'function') {
        this.socket.off();
      }
      if (typeof this.socket.destroy === 'function') {
        this.socket.destroy();
      }
      delete this.socket;
      this.connect(token);
    }
  }
  /**
   * @method isConnected
   * @return {boolean}
   * @description
   * This method will return true or false depending on established connections
   **/
  public isConnected(): boolean {
    return (this.socket && this.socket.connected);
  }
  /**
   * @method on
   * @param {string} event Event name
   * @param {Function} handler Event listener handler
   * @return {void}
   * @description
   * This method listen for server events from the current WebSocket connection.
   * This method is a facade that will wrap the original "on" method and run it
   * within the Angular Zone to avoid update issues.
   **/
  public on(event: string, handler: Function): void {
    this.socket.on(event, (data: any) => this.zone.run(() => handler(data)));
  }
  /**
   * @method emit
   * @param {string} event Event name
   * @param {any=} data Any type of data
   * @return {void}
   * @description
   * This method will send any type of data to the server according the event set.
   **/
  public emit(event: string, data?: any): void {
    if (data) {
      this.socket.emit(event, data);
    } else {
      this.socket.emit(event);
    }
  }
  /**
   * @method removeListener
   * @param {string} event Event name
   * @param {Function} handler Event listener handler
   * @return {void}
   * @description
   * This method will wrap the original "on" method and run it within the Angular Zone
   * Note: off is being used since the nativescript socket io client does not provide
   * removeListener method, but only provides with off which is provided in any platform.
   **/
  public removeListener(event: string, handler: Function): void {
    if (typeof this.socket.off === 'function') {
      this.socket.off(event, handler);
    }
  }
  /**
   * @method removeAllListeners
   * @param {string} event Event name
   * @param {Function} handler Event listener handler
   * @return {void}
   * @description
   * This method will wrap the original "on" method and run it within the Angular Zone
   * Note: off is being used since the nativescript socket io client does not provide
   * removeListener method, but only provides with off which is provided in any platform.
   **/
  public removeAllListeners(event: string): void {
    if (typeof this.socket.removeAllListeners === 'function') {
      this.socket.removeAllListeners(event);
    }
  }
  /**
   * @method disconnect
   * @return {void}
   * @description
   * This will disconnect the client from the server
   **/
  public disconnect(): void {
    this.socket.disconnect();
  }
  /**
   * @method heartbeater
   * @return {void}
   * @description
   * This will keep the connection as active, even when users are not sending
   * data, this avoids disconnection because of a connection not being used.
   **/
  private heartbeater(): void {
    let heartbeater: any = setInterval(() => {
      if (this.isConnected()) {
        this.socket.emit('lb-ping');
      } else {
        this.socket.removeAllListeners('lb-pong');
        clearInterval(heartbeater);
      }
    }, 15000);
    this.socket.on('lb-pong', (data: any) => console.info('Heartbeat: ', data));
  }
}
