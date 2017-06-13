/* tslint:disable */
import {
  ContentEvent,
  ContentPage,
  ContentProduct,
  ContentPost,
  StorageFile
} from '../index';

declare var Object: any;
export interface SystemDomainInterface {
  "id": any;
  "name": any;
  "email": any;
  "created"?: any;
  "modified"?: any;
  contentBaseModels?: any[];
  contentEvents?: ContentEvent[];
  contentPages?: ContentPage[];
  contentProducts?: ContentProduct[];
  contentPosts?: ContentPost[];
  storageFiles?: StorageFile[];
}

export class SystemDomain implements SystemDomainInterface {
  "id": any;
  "name": any;
  "email": any;
  "created": any;
  "modified": any;
  contentBaseModels: any[];
  contentEvents: ContentEvent[];
  contentPages: ContentPage[];
  contentProducts: ContentProduct[];
  contentPosts: ContentPost[];
  storageFiles: StorageFile[];
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
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "email": {
          name: 'email',
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
      },
      relations: {
        contentBaseModels: {
          name: 'contentBaseModels',
          type: 'any[]',
          model: ''
        },
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
      }
    }
  }
}
