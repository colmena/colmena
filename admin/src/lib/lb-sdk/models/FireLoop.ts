import { FireLoopRef } from './index';

export class FireLoop {

  private references: any = {};

  constructor(private socket: any, private models: { get: Function }) {}

  public ref<T>(model: any): FireLoopRef<T> {
    let name: string = model.getModelName();
    if (this.references[name]) { return this.references[name]; }
    model.models = this.models;
    this.references[name] = new FireLoopRef<T>(model, this.socket);
    return this.references[name];
  }
}
