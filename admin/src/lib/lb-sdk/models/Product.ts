/* tslint:disable */
import {
  Domain,
  File
} from '../index';

declare var Object: any;
export interface ProductInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "name"?: any;
  "description"?: any;
  "sku"?: any;
  "price"?: any;
  "created"?: any;
  "modified"?: any;
  domain?: Domain;
  file?: File;
}

export class Product implements ProductInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "name": any;
  "description": any;
  "sku": any;
  "price": any;
  "created": any;
  "modified": any;
  domain: Domain;
  file: File;
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
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
      name: 'Product',
      plural: 'Products',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "domainId": {
          name: 'domainId',
          type: 'any'
        },
        "fileId": {
          name: 'fileId',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "description": {
          name: 'description',
          type: 'any'
        },
        "sku": {
          name: 'sku',
          type: 'any'
        },
        "price": {
          name: 'price',
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
        domain: {
          name: 'domain',
          type: 'Domain',
          model: 'Domain'
        },
        file: {
          name: 'file',
          type: 'File',
          model: 'File'
        },
      }
    }
  }
}
