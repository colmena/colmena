/* tslint:disable */
import {
  Domain,
  Event,
  Product,
  Post
} from '../index';

declare var Object: any;
export interface TagInterface {
  id?: number;
  domainId?: string;
  tag?: string;
  created?: any;
  modified?: any;
  domain?: Domain;
  events?: Array<Event>;
  products?: Array<Product>;
  posts?: Array<Post>;
}

export class Tag implements TagInterface {
  id: number;
  domainId: string;
  tag: string;
  created: any;
  modified: any;
  domain: Domain;
  events: Array<Event>;
  products: Array<Product>;
  posts: Array<Post>;
  constructor(instance?: TagInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tag`.
   */
  public static getModelName() {
    return "Tag";
  }
}
