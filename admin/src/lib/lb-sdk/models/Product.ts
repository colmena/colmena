/* tslint:disable */
import {
  Domain,
  File
} from '../index';

declare var Object: any;
export interface ProductInterface {
  id?: number;
  domainId?: string;
  fileId?: string;
  name?: string;
  description?: string;
  sku?: string;
  price?: number;
  created?: Date;
  modified?: Date;
  domain?: Domain;
  file?: File;
}

export class Product implements ProductInterface {
  id: number;
  domainId: string;
  fileId: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  created: Date;
  modified: Date;
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
        id: {
          name: 'id',
          type: 'number'
        },
        domainId: {
          name: 'domainId',
          type: 'string'
        },
        fileId: {
          name: 'fileId',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        sku: {
          name: 'sku',
          type: 'string'
        },
        price: {
          name: 'price',
          type: 'number'
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
