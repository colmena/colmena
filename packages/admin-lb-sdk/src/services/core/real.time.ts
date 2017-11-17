import { Injectable, Inject } from '@angular/core'
import { IO } from './io.service'
import { LoopBackAuth } from './auth.service'
import { FireLoop } from '../../models/FireLoop'
import { SocketConnection } from '../../sockets/socket.connections'
import { SDKModels } from '../custom/SDKModels'
import { Observable } from 'rxjs/Rx'
import { Subject } from 'rxjs/Subject'
import { Subscription } from 'rxjs/Subscription'
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
@Injectable()
export class RealTime {
  public IO: IO
  public FireLoop: FireLoop
  private connecting: boolean = false
  private onReadySubject: Subject<string> = new Subject<string>()
  private sharedOnReady: Observable<string> = this.onReadySubject.asObservable().share()
  /**
  * @method constructor
  * @param {SocketConnection} connection WebSocket connection service
  * @param {SDKModels} models Model provider service
  * @param {LoopBackAuth} auth LoopBack authentication service
  * @description
  * It will intialize the shared on ready communication channel.
  **/
  constructor(
    @Inject(SocketConnection) public connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth
  ) {
    this.sharedOnReady.subscribe()
  }
  /**
  * @method onDisconnect
  * @return {Observable<any>} 
  * @description
  * Will trigger when Real-Time Service is disconnected from server.
  **/
  onDisconnect(): Observable<any> {
    return this.connection.sharedObservables.sharedOnDisconnect
  }
  /**
  * @method onAuthenticated
  * @return {Observable<any>} 
  * @description
  * Will trigger when Real-Time Service is authenticated with the server.
  **/
  onAuthenticated(): Observable<any> {
    return this.connection.sharedObservables.sharedOnAuthenticated
  }
  /**
  * @method onUnAuthorized
  * @return {Observable<any>} 
  * @description
  * Will trigger when Real-Time Service is not authorized to connect with the server.
  **/
  onUnAuthorized(): Observable<any> {
    return this.connection.sharedObservables.sharedOnUnAuthorized
  }
  /**
  * @method onReady
  * @return {Observable<any>} 
  * @description
  * Will trigger when Real-Time Service is Ready for broadcasting.
  * and will register connection flow events to notify subscribers.
  **/
  public onReady(): Observable<any> {
    // If there is a valid connection, then we just send back to the EventLoop
    // Or next will be executed before the actual subscription.
    if (this.connection.isConnected()) {
      let to = setTimeout(() => {
        this.onReadySubject.next('shared-connection')
        clearTimeout(to)
      })
      // Else if there is a current attempt of connection we wait for the prior
      // process that started the connection flow.
    } else if (this.connecting) {
      let ti = setInterval(() => {
        if (this.connection.isConnected()) {
          this.onReadySubject.next('shared-connection')
          clearInterval(ti)
        }
      }, 500)
      // If there is not valid connection or attempt, then we start the connection flow
      // and make sure we notify all the onReady subscribers when done.
      // Also it will listen for desconnections so we unsubscribe and avoid both:
      // Memory leaks and duplicated triggered events.
    } else {
      this.connecting = true
      this.connection.connect(this.auth.getToken())
      this.IO = new IO(this.connection)
      this.FireLoop = new FireLoop(this.connection, this.models)
      // Fire event for those subscribed
      let s1: Subscription = this.connection.sharedObservables.sharedOnConnect.subscribe(() => {
        console.log('Real-Time connection has been established')
        this.connecting = false
        this.onReadySubject.next('connected')
        let s2: Subscription = this.connection.sharedObservables.sharedOnDisconnect.subscribe(() => {
          s1.unsubscribe()
          s2.unsubscribe()
        })
      })
    }
    return this.sharedOnReady
  }
}
