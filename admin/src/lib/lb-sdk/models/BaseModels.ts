/* tslint:disable */

declare var Object: any;
export interface LoopBackFilter {
  fields?: any;
  include?: any;
  limit?: any;
  order?: any;
  skip?: any;
  offset?: any;
  where?: any;
}

export interface AccessTokenInterface {
    id?: string;
    ttl?: number;
    issuedAt?: any;
    created: any;
    userId?: number;
    rememberMe?: boolean;
}

export class AccessToken implements AccessTokenInterface {
  id: string = '';
  ttl: number = 1209600;
  created: Date = new Date(0);
  userId: number = 0;
  user: any = null;
  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AccessToken`.
   */
  public static getModelName() {
    return "AccessToken";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AccessToken for dynamic purposes.
  **/
  public static factory(data: AccessTokenInterface): AccessToken{
    return new AccessToken(data);
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
      name: 'AccessToken',
      plural: 'AccessTokens',
      properties: {
        id: {
          name: 'id',
          type: 'string'
        },
        ttl: {
          name: 'ttl',
          type: 'number',
          default: 1209600
        },
        created: {
          name: 'created',
          type: 'Date',
          default: new Date(0)
        },
        userId: {
          name: 'userId',
          type: 'number'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
      }
    }
  }
}

export class SDKToken implements AccessTokenInterface {
    id: any = null;
    ttl: number = null;
    issuedAt: any = null;
    created: any = null;
    userId: any = null;
    user: any = null;
    rememberMe: boolean = null;
    constructor(data?: AccessTokenInterface) {
        Object.assign(this, data);
    }
}

export interface GeoPoint  {
    lat: number;
    lng: number;
}

export interface StatFilter {
    range: string,
    custom?: {
      start: string,
      end: string
    },
    where?: {},
    groupBy?: string
}
