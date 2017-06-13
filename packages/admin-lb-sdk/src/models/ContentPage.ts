/* tslint:disable */
import {
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentPageInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "name": any;
  "content"?: any;
  "created"?: any;
  "modified"?: any;
  "systemDomainId"?: any;
  "systemUserId"?: any;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class ContentPage implements ContentPageInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "name": any;
  "content": any;
  "created": any;
  "modified": any;
  "systemDomainId": any;
  "systemUserId": any;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: ContentPageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentPage`.
   */
  public static getModelName() {
    return "ContentPage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentPage for dynamic purposes.
  **/
  public static factory(data: ContentPageInterface): ContentPage{
    return new ContentPage(data);
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
      name: 'ContentPage',
      plural: 'ContentPages',
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
        "content": {
          name: 'content',
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
