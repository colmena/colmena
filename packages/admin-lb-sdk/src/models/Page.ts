/* tslint:disable */
import {
  Domain,
  StorageFile
} from '../index';

declare var Object: any;
export interface PageInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "name": any;
  "content"?: any;
  "created"?: any;
  "modified"?: any;
  "storageFileId"?: any;
  domain?: Domain;
  file?: StorageFile;
}

export class Page implements PageInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "name": any;
  "content": any;
  "created": any;
  "modified": any;
  "storageFileId": any;
  domain: Domain;
  file: StorageFile;
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
        "content": {
          name: 'content',
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
        "storageFileId": {
          name: 'storageFileId',
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
          type: 'StorageFile',
          model: 'StorageFile'
        },
      }
    }
  }
}
