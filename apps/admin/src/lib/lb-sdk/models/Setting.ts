/* tslint:disable */

declare var Object: any;
export interface SettingInterface {
  "key": any;
  "value"?: any;
  "system"?: any;
  "type": any;
  "description"?: any;
  "created"?: any;
  "modified"?: any;
}

export class Setting implements SettingInterface {
  "key": any;
  "value": any;
  "system": any;
  "type": any;
  "description": any;
  "created": any;
  "modified": any;
  constructor(data?: SettingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Setting`.
   */
  public static getModelName() {
    return "Setting";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Setting for dynamic purposes.
  **/
  public static factory(data: SettingInterface): Setting{
    return new Setting(data);
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
      name: 'Setting',
      plural: 'Settings',
      properties: {
        "key": {
          name: 'key',
          type: 'any'
        },
        "value": {
          name: 'value',
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
