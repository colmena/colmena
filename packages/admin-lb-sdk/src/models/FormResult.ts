/* tslint:disable */
import {
  Form,
  StorageFile,
  SystemDomain,
  SystemUser
} from '../index';

declare var Object: any;
export interface FormResultInterface {
  "id"?: string;
  "formId"?: string;
  "definition"?: any;
  "result"?: any;
  "systemDomainId"?: string;
  "systemUserId"?: string;
  "storageFileId"?: string;
  "created"?: Date;
  "modified"?: Date;
  form?: Form;
  storageFile?: StorageFile;
  systemDomain?: SystemDomain;
  systemUser?: SystemUser;
}

export class FormResult implements FormResultInterface {
  "id": string;
  "formId": string;
  "definition": any;
  "result": any;
  "systemDomainId": string;
  "systemUserId": string;
  "storageFileId": string;
  "created": Date;
  "modified": Date;
  form: Form;
  storageFile: StorageFile;
  systemDomain: SystemDomain;
  systemUser: SystemUser;
  constructor(data?: FormResultInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FormResult`.
   */
  public static getModelName() {
    return "FormResult";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FormResult for dynamic purposes.
  **/
  public static factory(data: FormResultInterface): FormResult{
    return new FormResult(data);
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
      name: 'FormResult',
      plural: 'FormResults',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "formId": {
          name: 'formId',
          type: 'string'
        },
        "definition": {
          name: 'definition',
          type: 'any'
        },
        "result": {
          name: 'result',
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
        form: {
          name: 'form',
          type: 'Form',
          model: 'Form'
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
