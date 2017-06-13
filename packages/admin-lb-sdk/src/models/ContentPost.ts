/* tslint:disable */
import {
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentPostInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "title"?: any;
  "content"?: any;
  "userId"?: any;
  "created"?: any;
  "modified"?: any;
  "systemDomainId"?: any;
  "systemUserId"?: any;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class ContentPost implements ContentPostInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "title": any;
  "content": any;
  "userId": any;
  "created": any;
  "modified": any;
  "systemDomainId": any;
  "systemUserId": any;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: ContentPostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentPost`.
   */
  public static getModelName() {
    return "ContentPost";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentPost for dynamic purposes.
  **/
  public static factory(data: ContentPostInterface): ContentPost{
    return new ContentPost(data);
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
      name: 'ContentPost',
      plural: 'ContentPosts',
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
        "title": {
          name: 'title',
          type: 'any'
        },
        "content": {
          name: 'content',
          type: 'any'
        },
        "userId": {
          name: 'userId',
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
