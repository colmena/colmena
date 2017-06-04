/* tslint:disable */
import {
  Event,
  Page,
  Post,
  Product
} from '../index';

declare var Object: any;
export interface StorageFileInterface {
  "id"?: any;
  "name"?: any;
  "type"?: any;
  "created"?: any;
  "modified"?: any;
  "container"?: any;
  events?: Event[];
  pages?: Page[];
  posts?: Post[];
  products?: Product[];
}

export class StorageFile implements StorageFileInterface {
  "id": any;
  "name": any;
  "type": any;
  "created": any;
  "modified": any;
  "container": any;
  events: Event[];
  pages: Page[];
  posts: Post[];
  products: Product[];
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
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "type": {
          name: 'type',
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
        "container": {
          name: 'container',
          type: 'any'
        },
      },
      relations: {
        events: {
          name: 'events',
          type: 'Event[]',
          model: 'Event'
        },
        pages: {
          name: 'pages',
          type: 'Page[]',
          model: 'Page'
        },
        posts: {
          name: 'posts',
          type: 'Post[]',
          model: 'Post'
        },
        products: {
          name: 'products',
          type: 'Product[]',
          model: 'Product'
        },
      }
    }
  }
}
