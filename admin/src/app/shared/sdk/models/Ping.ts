/* tslint:disable */

declare var Object: any;
export interface PingInterface {
  id?: string;
}

export class Ping implements PingInterface {
  id: string;
  constructor(instance?: PingInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ping`.
   */
  public static getModelName() {
    return "Ping";
  }
}
