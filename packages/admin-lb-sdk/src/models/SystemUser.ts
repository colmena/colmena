/* tslint:disable */
import {
  ContentEvent,
  ContentPage,
  ContentProduct,
  ContentPost,
  StorageFile
} from '../index';

declare var Object: any;
export interface SystemUserInterface {
  "id": any;
  "username": any;
  "email": any;
  "firstName": any;
  "lastName": any;
  "avatar"?: any;
  "realm"?: any;
  "password": any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "created"?: any;
  "modified"?: any;
  accessTokens?: any[];
  roles?: any[];
  contentBaseModels?: any[];
  contentEvents?: ContentEvent[];
  contentPages?: ContentPage[];
  contentProducts?: ContentProduct[];
  contentPosts?: ContentPost[];
  storageFiles?: StorageFile[];
}

export class SystemUser implements SystemUserInterface {
  "id": any;
  "username": any;
  "email": any;
  "firstName": any;
  "lastName": any;
  "avatar": any;
  "realm": any;
  "password": any;
  "emailVerified": any;
  "verificationToken": any;
  "created": any;
  "modified": any;
  accessTokens: any[];
  roles: any[];
  contentBaseModels: any[];
  contentEvents: ContentEvent[];
  contentPages: ContentPage[];
  contentProducts: ContentProduct[];
  contentPosts: ContentPost[];
  storageFiles: StorageFile[];
  constructor(data?: SystemUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemUser`.
   */
  public static getModelName() {
    return "SystemUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemUser for dynamic purposes.
  **/
  public static factory(data: SystemUserInterface): SystemUser{
    return new SystemUser(data);
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
      name: 'SystemUser',
      plural: 'Users',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "username": {
          name: 'username',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'any'
        },
        "firstName": {
          name: 'firstName',
          type: 'any'
        },
        "lastName": {
          name: 'lastName',
          type: 'any'
        },
        "avatar": {
          name: 'avatar',
          type: 'any'
        },
        "realm": {
          name: 'realm',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'any'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'any'
        },
        "verificationToken": {
          name: 'verificationToken',
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
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: ''
        },
        contentBaseModels: {
          name: 'contentBaseModels',
          type: 'any[]',
          model: ''
        },
        contentEvents: {
          name: 'contentEvents',
          type: 'ContentEvent[]',
          model: 'ContentEvent'
        },
        contentPages: {
          name: 'contentPages',
          type: 'ContentPage[]',
          model: 'ContentPage'
        },
        contentProducts: {
          name: 'contentProducts',
          type: 'ContentProduct[]',
          model: 'ContentProduct'
        },
        contentPosts: {
          name: 'contentPosts',
          type: 'ContentPost[]',
          model: 'ContentPost'
        },
        storageFiles: {
          name: 'storageFiles',
          type: 'StorageFile[]',
          model: 'StorageFile'
        },
      }
    }
  }
}
