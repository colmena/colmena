/* tslint:disable */

declare var Object: any;
export interface SettingInterface {
  key: string;
  value?: string;
  type: string;
  description?: string;
  id?: number;
  created?: any;
  modified?: any;
}

export class Setting implements SettingInterface {
  key: string;
  value: string;
  type: string;
  description: string;
  id: number;
  created: any;
  modified: any;
  constructor(instance?: SettingInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Setting`.
   */
  public static getModelName() {
    return "Setting";
  }
}
