import { LoopBackConfig } from '../lb.config';
import { AccessToken, FireLoopRef } from './index';
import { SocketConnections } from '../sockets/socket.connections';

export class FireLoop {

  private socket: any;
  private references: any = {};

  constructor(token: AccessToken) {
    this.socket = SocketConnections.getHandler(LoopBackConfig.getPath(), token);
  }

  public ref<T>(model: { getModelName(): string }): FireLoopRef<T> {
    let name: string = model.getModelName();
    if (this.references[name]) { return this.references[name]; }
    this.references[name] = new FireLoopRef<T>(name, this.socket);
    return this.references[name];
  }
}
