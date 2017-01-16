import { Injectable, Inject } from '@angular/core';
import { IO } from './io.service';
import { JSONSearchParams } from './search.params';
import { LoopBackAuth } from './auth.service';
import { LoopBackConfig } from '../../lb.config';
import { FireLoop } from '../../models/FireLoop';
import { SocketConnections } from '../../sockets/socket.connections';
import { SDKModels } from '../custom/SDKModels';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RealTime {

  public IO: IO;
  public FireLoop: FireLoop;
  private connected: boolean = false;
  private socket: any;

  constructor(
    @Inject(SocketConnections) protected connections: SocketConnections,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams
  ) {}

  disconnect(): void {
    this.connected = false;
    this.IO        = null;
    this.FireLoop  = null;
    this.connections.disconnect();
  }

  getConnection(): void {
    return this.connections.getHandler(LoopBackConfig.getPath(), this.auth.getToken());
  }
  /**
  * @method onReady
  * @description
  * Will trigger when FireLoop is Ready for broadcasting.
  **/
  public onReady(): Observable<null> {
    let subject: Subject<null> = new Subject<null>();
    if (this.connected) {
      setTimeout(() => subject.next());
    } else {
      this.socket   = this.getConnection();
      this.IO       = new IO(this.socket);
      this.FireLoop = new FireLoop(this.socket, this.models);
      this.socket.on('connect', () => {
        this.connected = true;
        subject.next();
      });
      this.socket.on('disconnect', () => {
        subject.complete();
        this.disconnect();
      });
    }
    return subject.asObservable();
  }
}
