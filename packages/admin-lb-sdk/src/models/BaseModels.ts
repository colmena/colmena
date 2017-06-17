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
  "id"?: string;
  "ttl"?: number;
  "scopes"?: ["string"];
  "created"?: Date;
  "userId"?: string;
  "user"?: any;
}

export class AccessToken implements AccessTokenInterface {
  "id": string;
  "ttl": number;
  "scopes": ["string"];
  "created": Date;
  "userId": string;
  "user": any;
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
        "id": {
          name: 'id',
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'number',
          default: 1209600
        },
        "scopes": {
          name: 'scopes',
          type: '["string"]'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'string'
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
  scopes: any = null;
  created: any = null;
  userId: any = null;
  user: any = null;
  rememberMe: boolean = null;
  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
}
/**
* This GeoPoint represents both, LoopBack and MongoDB GeoPoint
**/
export interface GeoPoint  {
    lat?: number;
    lng?: number;
    type?: string;
    coordinates?: number[];
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
