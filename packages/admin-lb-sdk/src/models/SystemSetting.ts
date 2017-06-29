/* tslint:disable */

declare var Object: any;
export interface SystemSettingInterface {
  "id": string;
  "key": string;
  "referenceId"?: string;
  "referenceType"?: string;
  "system"?: boolean;
  "type": string;
  "description"?: string;
  "created"?: Date;
  "modified"?: Date;
  reference?: any;
}

export class SystemSetting implements SystemSettingInterface {
  "id": string;
  "key": string;
  "referenceId": string;
  "referenceType": string;
  "system": boolean;
  "type": string;
  "description": string;
  "created": Date;
  "modified": Date;
  reference: any;
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
        "id": {
          name: 'id',
          type: 'string'
        },
        "key": {
          name: 'key',
          type: 'string'
        },
        "referenceId": {
          name: 'referenceId',
          type: 'string'
        },
        "referenceType": {
          name: 'referenceType',
          type: 'string'
        },
        "system": {
          name: 'system',
          type: 'boolean',
          default: false
        },
        "type": {
          name: 'type',
          type: 'string',
          default: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
        reference: {
          name: 'reference',
          type: 'any',
          model: ''
        },
      }
    }
  }
}
