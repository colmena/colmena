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
    created?: any;
    userId?: string;
    rememberMe?: boolean;
}

export class AccessToken implements AccessTokenInterface {
    id:string;
    ttl: number;
    issuedAt?: any;
    created?: any;
    userId: string;
    user: any;
    rememberMe: boolean = null;
    constructor(instance?: AccessToken) {
        Object.assign(this, instance);
    }
}

export class SDKToken extends AccessToken {
    id: any = null;
    ttl: number = null;
    issuedAt?: any = null;
    created?: any = null;
    userId: any = null;
    user: any = null;
    rememberMe: boolean = null;
    constructor(instance?: AccessToken) {
        super(instance);
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
