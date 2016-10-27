/* tslint:disable */

declare var Object: any;
export interface FixturesInterface {
  id?: number;
}

export class Fixtures implements FixturesInterface {
  id: number;
  constructor(instance?: FixturesInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Fixtures`.
   */
  public static getModelName() {
    return "Fixtures";
  }
}
