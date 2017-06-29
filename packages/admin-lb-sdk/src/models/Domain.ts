/* tslint:disable */
import {
  SystemSetting
} from '../index';

declare var Object: any;
export interface DomainInterface {
  "id": string;
  "name": string;
  "email": string;
  "created"?: Date;
  "modified"?: Date;
  settings?: SystemSetting[];
}

export class Domain implements DomainInterface {
  "id": string;
  "name": string;
  "email": string;
  "created": Date;
  "modified": Date;
  settings: SystemSetting[];
  constructor(data?: DomainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domain`.
   */
  public static getModelName() {
    return "Domain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Domain for dynamic purposes.
  **/
  public static factory(data: DomainInterface): Domain{
    return new Domain(data);
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
      name: 'Domain',
      plural: 'CoreDomains',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "email": {
          name: 'email',
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
        settings: {
          name: 'settings',
          type: 'SystemSetting[]',
          model: 'SystemSetting'
        },
      }
    }
  }
}
