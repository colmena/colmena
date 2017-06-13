/* tslint:disable */
import {
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentEventInterface {
  "id"?: any;
  "fileId"?: any;
  "name": any;
  "date"?: any;
  "location"?: any;
  "created"?: any;
  "modified"?: any;
  "systemDomainId"?: any;
  "systemUserId"?: any;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class ContentEvent implements ContentEventInterface {
  "id": any;
  "fileId": any;
  "name": any;
  "date": any;
  "location": any;
  "created": any;
  "modified": any;
  "systemDomainId": any;
  "systemUserId": any;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: ContentEventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentEvent`.
   */
  public static getModelName() {
    return "ContentEvent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentEvent for dynamic purposes.
  **/
  public static factory(data: ContentEventInterface): ContentEvent{
    return new ContentEvent(data);
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
      name: 'ContentEvent',
      plural: 'ContentEvents',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "fileId": {
          name: 'fileId',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "date": {
          name: 'date',
          type: 'any'
        },
        "location": {
          name: 'location',
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
        "systemDomainId": {
          name: 'systemDomainId',
          type: 'any'
        },
        "systemUserId": {
          name: 'systemUserId',
          type: 'any'
        },
      },
      relations: {
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain'
        },
        systemUser: {
          name: 'systemUser',
          type: 'SystemUser',
          model: 'SystemUser'
        },
      }
    }
  }
}
