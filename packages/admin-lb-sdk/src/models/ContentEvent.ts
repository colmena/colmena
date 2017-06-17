/* tslint:disable */
import {
  StorageFile,
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface ContentEventInterface {
  "name": string;
  "date"?: Date;
  "location"?: string;
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

export class ContentEvent implements ContentEventInterface {
  "name": string;
  "date": Date;
  "location": string;
  "id": number;
  "systemDomainId": string;
  "systemUserId": string;
  "storageFileId": string;
  "created": Date;
  "modified": Date;
  storageFile: StorageFile;
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
        "name": {
          name: 'name',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "location": {
          name: 'location',
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
