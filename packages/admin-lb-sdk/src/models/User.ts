/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  "id"?: any;
  "username": any;
  "email": any;
  "firstName": any;
  "lastName": any;
  "realm": any;
  "password": any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "created"?: any;
  "modified"?: any;
  "domainId"?: any;
  accessTokens?: any[];
  roles?: any[];
}

export class User implements UserInterface {
  "id": any;
  "username": any;
  "email": any;
  "firstName": any;
  "lastName": any;
  "realm": any;
  "password": any;
  "emailVerified": any;
  "verificationToken": any;
  "created": any;
  "modified": any;
  "domainId": any;
  accessTokens: any[];
  roles: any[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
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
        "domainId": {
          name: 'domainId',
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
      }
    }
  }
}
