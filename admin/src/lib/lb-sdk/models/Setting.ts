/* tslint:disable */

declare var Object: any;
export interface SettingInterface {
  key: string;
  value?: string;
  type: string;
  description?: string;
  id?: number;
  created?: Date;
  modified?: Date;
}

export class Setting implements SettingInterface {
  key: string;
  value: string;
  type: string;
  description: string;
  id: number;
  created: Date;
  modified: Date;
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
        key: {
          name: 'key',
          type: 'string'
        },
        value: {
          name: 'value',
          type: 'string'
        },
        type: {
          name: 'type',
          type: 'string',
          default: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
