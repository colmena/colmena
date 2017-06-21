/* tslint:disable */
import {
  SystemUser
} from '../index';

declare var Object: any;
export interface AuthCredentialInterface {
  "provider"?: string;
  "authScheme"?: string;
  "externalId"?: string;
  "profile"?: any;
  "credentials"?: any;
  "created"?: Date;
  "modified"?: Date;
  "id"?: number;
  "userId"?: string;
  user?: SystemUser;
}

export class AuthCredential implements AuthCredentialInterface {
  "provider": string;
  "authScheme": string;
  "externalId": string;
  "profile": any;
  "credentials": any;
  "created": Date;
  "modified": Date;
  "id": number;
  "userId": string;
  user: SystemUser;
  constructor(data?: AuthCredentialInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AuthCredential`.
   */
  public static getModelName() {
    return "AuthCredential";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AuthCredential for dynamic purposes.
  **/
  public static factory(data: AuthCredentialInterface): AuthCredential{
    return new AuthCredential(data);
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
      name: 'AuthCredential',
      plural: 'AuthCredentials',
      properties: {
        "provider": {
          name: 'provider',
          type: 'string'
        },
        "authScheme": {
          name: 'authScheme',
          type: 'string'
        },
        "externalId": {
          name: 'externalId',
          type: 'string'
        },
        "profile": {
          name: 'profile',
          type: 'any'
        },
        "credentials": {
          name: 'credentials',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "userId": {
          name: 'userId',
          type: 'string'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'SystemUser',
          model: 'SystemUser'
        },
      }
    }
  }
}
