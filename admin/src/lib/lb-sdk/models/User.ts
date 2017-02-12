/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  id?: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  realm: string;
  password: string;
  challenges?: any;
  emailVerified?: boolean;
  verificationToken?: string;
  status?: string;
  created?: Date;
  lastUpdated?: Date;
  modified?: Date;
  domainId?: string;
  accessTokens?: any[];
  roles?: any[];
}

export class User implements UserInterface {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  realm: string;
  password: string;
  challenges: any;
  emailVerified: boolean;
  verificationToken: string;
  status: string;
  created: Date;
  lastUpdated: Date;
  modified: Date;
  domainId: string;
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
        id: {
          name: 'id',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        firstName: {
          name: 'firstName',
          type: 'string'
        },
        lastName: {
          name: 'lastName',
          type: 'string'
        },
        realm: {
          name: 'realm',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        credentials: {
          name: 'credentials',
          type: 'any'
        },
        challenges: {
          name: 'challenges',
          type: 'any'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        status: {
          name: 'status',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        lastUpdated: {
          name: 'lastUpdated',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
        },
        domainId: {
          name: 'domainId',
          type: 'string'
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
