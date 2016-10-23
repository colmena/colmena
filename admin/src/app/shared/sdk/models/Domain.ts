/* tslint:disable */
import {
  Author,
  Event,
  Post,
  Product,
  Tag
} from '../index';

declare var Object: any;
export interface DomainInterface {
  id: string;
  name?: string;
  authors?: Array<Author>;
  events?: Array<Event>;
  posts?: Array<Post>;
  products?: Array<Product>;
  tags?: Array<Tag>;
}

export class Domain implements DomainInterface {
  id: string;
  name: string;
  authors: Array<Author>;
  events: Array<Event>;
  posts: Array<Post>;
  products: Array<Product>;
  tags: Array<Tag>;
  constructor(instance?: DomainInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domain`.
   */
  public static getModelName() {
    return "Domain";
  }
}
