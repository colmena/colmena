/* tslint:disable */

declare var Object: any;
export interface SystemSettingInterface {
  "key": any;
  "system"?: any;
  "type": any;
  "description"?: any;
  "created"?: any;
  "modified"?: any;
}

export class SystemSetting implements SystemSettingInterface {
  "key": any;
  "system": any;
  "type": any;
  "description": any;
  "created": any;
  "modified": any;
  constructor(data?: SystemSettingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemSetting`.
   */
  public static getModelName() {
    return "SystemSetting";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemSetting for dynamic purposes.
  **/
  public static factory(data: SystemSettingInterface): SystemSetting{
    return new SystemSetting(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'SystemSetting',
      plural: 'Settings',
      properties: {
        "key": {
          name: 'key',
          type: 'any'
        },
        "system": {
          name: 'system',
          type: 'any',
          default: false
        },
        "type": {
          name: 'type',
          type: 'any',
          default: 'string'
        },
        "description": {
          name: 'description',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'any'
        },
        "modified": {
          name: 'modified',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
