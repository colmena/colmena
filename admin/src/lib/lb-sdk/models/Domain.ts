/* tslint:disable */
import {
  User,
  Event,
  Post,
  Product,
  Page
} from '../index';

declare var Object: any;
export interface DomainInterface {
  id: string;
  name?: string;
  created?: Date;
  modified?: Date;
  users?: User[];
  events?: Event[];
  posts?: Post[];
  products?: Product[];
  pages?: Page[];
}

export class Domain implements DomainInterface {
  id: string;
  name: string;
  created: Date;
  modified: Date;
  users: User[];
  events: Event[];
  posts: Post[];
  products: Product[];
  pages: Page[];
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
        id: {
          name: 'id',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
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
      }
    }
  }
}
