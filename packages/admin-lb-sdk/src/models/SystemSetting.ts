/* tslint:disable */

declare var Object: any
export interface SystemSettingInterface {
  key: string
  system?: boolean
  type: string
  description?: string
  created?: Date
  modified?: Date
}

export class SystemSetting implements SystemSettingInterface {
  key: string
  system: boolean
  type: string
  description: string
  created: Date
  modified: Date
  constructor(data?: SystemSettingInterface) {
    Object.assign(this, data)
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemSetting`.
   */
  public static getModelName() {
    return 'SystemSetting'
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemSetting for dynamic purposes.
  **/
  public static factory(data: SystemSettingInterface): SystemSetting {
    return new SystemSetting(data)
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
      path: 'Settings',
      properties: {
        key: {
          name: 'key',
          type: 'string',
        },
        system: {
          name: 'system',
          type: 'boolean',
          default: false,
        },
        type: {
          name: 'type',
          type: 'string',
          default: 'string',
        },
        description: {
          name: 'description',
          type: 'string',
        },
        created: {
          name: 'created',
          type: 'Date',
        },
        modified: {
          name: 'modified',
          type: 'Date',
        },
      },
      relations: {},
    }
  }
}
