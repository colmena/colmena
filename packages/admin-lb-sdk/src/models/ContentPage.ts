/* tslint:disable */
import {
  StorageFile,
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentPageInterface {
  "name": string;
  "content"?: string;
  "id"?: number;
  "systemDomainId"?: string;
  "systemUserId"?: string;
  "storageFileId"?: string;
  "created"?: Date;
  "modified"?: Date;
  storageFile?: StorageFile;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class ContentPage implements ContentPageInterface {
  "name": string;
  "content": string;
  "id": number;
  "systemDomainId": string;
  "systemUserId": string;
  "storageFileId": string;
  "created": Date;
  "modified": Date;
  storageFile: StorageFile;
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
      path: 'ContentPages',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "systemDomainId": {
          name: 'systemDomainId',
          type: 'string'
        },
        "systemUserId": {
          name: 'systemUserId',
          type: 'string'
        },
        "storageFileId": {
          name: 'storageFileId',
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
        storageFile: {
          name: 'storageFile',
          type: 'StorageFile',
          model: 'StorageFile'
        },
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
