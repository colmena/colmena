/* tslint:disable */
import {
  Domain,
  Tag
} from '../index';

declare var Object: any;
export interface ProductInterface {
  id?: number;
  domainId?: string;
  name?: string;
  description?: string;
  sku?: string;
  created?: any;
  modified?: any;
  tagId?: number;
  domain?: Domain;
  tag?: Tag;
}

export class Product implements ProductInterface {
  id: number;
  domainId: string;
  name: string;
  description: string;
  sku: string;
  created: any;
  modified: any;
  tagId: number;
  domain: Domain;
  tag: Tag;
  constructor(instance?: ProductInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
}
