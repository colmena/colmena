/* tslint:disable */
import {
  User,
  Event,
  Post,
  Product,
  Page,
  StorageFile
} from '../index';

declare var Object: any;
export interface DomainInterface {
  "id": any;
  "name": any;
  "email": any;
  "created"?: any;
  "modified"?: any;
  users?: User[];
  events?: Event[];
  posts?: Post[];
  products?: Product[];
  pages?: Page[];
  files?: StorageFile[];
}

export class Domain implements DomainInterface {
  "id": any;
  "name": any;
  "email": any;
  "created": any;
  "modified": any;
  users: User[];
  events: Event[];
  posts: Post[];
  products: Product[];
  pages: Page[];
  files: StorageFile[];
  constructor(data?: DomainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domain`.
   */
  public static getModelName() {
    return "Domain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Domain for dynamic purposes.
  **/
  public static factory(data: DomainInterface): Domain{
    return new Domain(data);
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
      name: 'Domain',
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
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User'
        },
        events: {
          name: 'events',
          type: 'Event[]',
          model: 'Event'
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
        pages: {
          name: 'pages',
          type: 'Page[]',
          model: 'Page'
        },
        files: {
          name: 'files',
          type: 'StorageFile[]',
          model: 'StorageFile'
        },
      }
    }
  }
}
