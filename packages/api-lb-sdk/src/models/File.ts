/* tslint:disable */
import {
  Event,
  Page,
  Post,
  Product
} from '../index';

declare var Object: any;
export interface FileInterface {
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

export class File implements FileInterface {
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
  constructor(data?: FileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `File`.
   */
  public static getModelName() {
    return "File";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of File for dynamic purposes.
  **/
  public static factory(data: FileInterface): File{
    return new File(data);
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
      name: 'File',
      plural: 'Files',
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
