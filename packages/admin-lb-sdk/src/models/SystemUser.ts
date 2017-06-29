/* tslint:disable */
import {
  ContentEvent,
  ContentPage,
  ContentProduct,
  ContentPost
} from '../index';

declare var Object: any;
export interface SystemUserInterface {
  "id": string;
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "fullName"?: string;
  "avatar"?: string;
  "realm"?: string;
  "emailVerified"?: boolean;
  "created"?: Date;
  "modified"?: Date;
  accessTokens?: any[];
  roles?: any[];
  contentEvents?: ContentEvent[];
  contentPages?: ContentPage[];
  contentProducts?: ContentProduct[];
  contentPosts?: ContentPost[];
}

export class SystemUser implements SystemUserInterface {
  "id": string;
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "fullName": string;
  "avatar": string;
  "realm": string;
  "emailVerified": boolean;
  "created": Date;
  "modified": Date;
  accessTokens: any[];
  roles: any[];
  contentEvents: ContentEvent[];
  contentPages: ContentPage[];
  contentProducts: ContentProduct[];
  contentPosts: ContentPost[];
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
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "fullName": {
          name: 'fullName',
          type: 'string'
        },
        "avatar": {
          name: 'avatar',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
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
      }
    }
  }
}
