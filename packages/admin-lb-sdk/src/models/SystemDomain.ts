/* tslint:disable */
import {
  ContentEvent,
  ContentPage,
  ContentProduct,
  ContentPost,
  StorageFile,
  SystemSetting
} from '../index';

declare var Object: any;
export interface SystemDomainInterface {
  "id": string;
  "name": string;
  "email": string;
  "created"?: Date;
  "modified"?: Date;
  contentEvents?: ContentEvent[];
  contentPages?: ContentPage[];
  contentProducts?: ContentProduct[];
  contentPosts?: ContentPost[];
  storageFiles?: StorageFile[];
  settings?: SystemSetting[];
}

export class SystemDomain implements SystemDomainInterface {
  "id": string;
  "name": string;
  "email": string;
  "created": Date;
  "modified": Date;
  contentEvents: ContentEvent[];
  contentPages: ContentPage[];
  contentProducts: ContentProduct[];
  contentPosts: ContentPost[];
  storageFiles: StorageFile[];
  settings: SystemSetting[];
  constructor(data?: SystemDomainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemDomain`.
   */
  public static getModelName() {
    return "SystemDomain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemDomain for dynamic purposes.
  **/
  public static factory(data: SystemDomainInterface): SystemDomain{
    return new SystemDomain(data);
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
      name: 'SystemDomain',
      plural: 'Domains',
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
        contentEvents: {
          name: 'contentEvents',
          type: 'ContentEvent[]',
          model: 'ContentEvent'
        },
        contentPages: {
          name: 'contentPages',
          type: 'ContentPage[]',
          model: 'ContentPage'
        },
        contentProducts: {
          name: 'contentProducts',
          type: 'ContentProduct[]',
          model: 'ContentProduct'
        },
        contentPosts: {
          name: 'contentPosts',
          type: 'ContentPost[]',
          model: 'ContentPost'
        },
        storageFiles: {
          name: 'storageFiles',
          type: 'StorageFile[]',
          model: 'StorageFile'
        },
        settings: {
          name: 'settings',
          type: 'SystemSetting[]',
          model: 'SystemSetting'
        },
      }
    }
  }
}
