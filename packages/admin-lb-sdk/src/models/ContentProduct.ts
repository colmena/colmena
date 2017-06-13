/* tslint:disable */
import {
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentProductInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "name"?: any;
  "description"?: any;
  "sku"?: any;
  "price"?: any;
  "created"?: any;
  "modified"?: any;
  "systemDomainId"?: any;
  "systemUserId"?: any;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class ContentProduct implements ContentProductInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "name": any;
  "description": any;
  "sku": any;
  "price": any;
  "created": any;
  "modified": any;
  "systemDomainId": any;
  "systemUserId": any;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: ContentProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentProduct`.
   */
  public static getModelName() {
    return "ContentProduct";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentProduct for dynamic purposes.
  **/
  public static factory(data: ContentProductInterface): ContentProduct{
    return new ContentProduct(data);
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
      name: 'ContentProduct',
      plural: 'ContentProducts',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "domainId": {
          name: 'domainId',
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
        "description": {
          name: 'description',
          type: 'any'
        },
        "sku": {
          name: 'sku',
          type: 'any'
        },
        "price": {
          name: 'price',
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
