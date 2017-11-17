/* tslint:disable */
import {
  ContentEvent,
  ContentPage,
  ContentProduct,
  ContentPost,
  SystemDomain
} from '../index';

declare var Object: any;
export interface StorageFileInterface {
  "id"?: string;
  "name"?: string;
  "type"?: string;
  "created"?: Date;
  "modified"?: Date;
  "container"?: string;
  contentEvents?: ContentEvent[];
  contentPages?: ContentPage[];
  contentProducts?: ContentProduct[];
  contentPosts?: ContentPost[];
  systemDomain?: SystemDomain;
}

export class StorageFile implements StorageFileInterface {
  "id": string;
  "name": string;
  "type": string;
  "created": Date;
  "modified": Date;
  "container": string;
  contentEvents: ContentEvent[];
  contentPages: ContentPage[];
  contentProducts: ContentProduct[];
  contentPosts: ContentPost[];
  systemDomain: SystemDomain;
  constructor(data?: StorageFileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StorageFile`.
   */
  public static getModelName() {
    return "StorageFile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StorageFile for dynamic purposes.
  **/
  public static factory(data: StorageFileInterface): StorageFile{
    return new StorageFile(data);
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
      name: 'StorageFile',
      plural: 'StorageFiles',
      path: 'StorageFiles',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "type": {
          name: 'type',
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
        "container": {
          name: 'container',
          type: 'string'
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
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain'
        },
      }
    }
  }
}
