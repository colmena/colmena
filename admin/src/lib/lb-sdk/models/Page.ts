/* tslint:disable */
import {
  Domain
} from '../index';

declare var Object: any;
export interface PageInterface {
  id?: number;
  domainId?: string;
  name: string;
  content?: string;
  created?: Date;
  modified?: Date;
  domain?: Domain;
}

export class Page implements PageInterface {
  id: number;
  domainId: string;
  name: string;
  content: string;
  created: Date;
  modified: Date;
  domain: Domain;
  constructor(data?: PageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Page`.
   */
  public static getModelName() {
    return "Page";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Page for dynamic purposes.
  **/
  public static factory(data: PageInterface): Page{
    return new Page(data);
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
      name: 'Page',
      plural: 'Pages',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        domainId: {
          name: 'domainId',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        content: {
          name: 'content',
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
        domain: {
          name: 'domain',
          type: 'Domain',
          model: 'Domain'
        },
      }
    }
  }
}
