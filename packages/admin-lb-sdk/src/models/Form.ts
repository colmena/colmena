/* tslint:disable */
import {
  FormResult,
  StorageFile,
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface FormInterface {
  "id"?: string;
  "name": string;
  "definition"?: any;
  "systemDomainId"?: string;
  "systemUserId"?: string;
  "storageFileId"?: string;
  "created"?: Date;
  "modified"?: Date;
  results?: FormResult[];
  storageFile?: StorageFile;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class Form implements FormInterface {
  "id": string;
  "name": string;
  "definition": any;
  "systemDomainId": string;
  "systemUserId": string;
  "storageFileId": string;
  "created": Date;
  "modified": Date;
  results: FormResult[];
  storageFile: StorageFile;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: FormInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Form`.
   */
  public static getModelName() {
    return "Form";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Form for dynamic purposes.
  **/
  public static factory(data: FormInterface): Form{
    return new Form(data);
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
      name: 'Form',
      plural: 'Forms',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "definition": {
          name: 'definition',
          type: 'any'
        },
        "systemDomainId": {
          name: 'systemDomainId',
          type: 'string'
        },
        "systemUserId": {
          name: 'systemUserId',
          type: 'string'
        },
        "storageFileId": {
          name: 'storageFileId',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
        results: {
          name: 'results',
          type: 'FormResult[]',
          model: 'FormResult'
        },
        storageFile: {
          name: 'storageFile',
          type: 'StorageFile',
          model: 'StorageFile'
        },
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain'
        },
        systemUser: {
          name: 'systemUser',
          type: 'SystemUser',
          model: 'SystemUser'
        },
      }
    }
  }
}
