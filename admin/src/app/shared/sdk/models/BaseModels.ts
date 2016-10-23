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
    created?: any;
    userId?: string;
    rememberMe?: boolean;
}

export class AccessToken implements AccessTokenInterface {
    id:string;
    ttl: number;
    created: any;
    userId: string;
    user: any;
    constructor(instance?: AccessToken) {
        Object.assign(this, instance);
    }
}

export class SDKToken extends AccessToken {
    id: any = null;
    ttl: number = null;
    created: any = null;
    userId: any = null;
    user: any = null;
    rememberMe: boolean = null;
    constructor(instance?: AccessToken) {
        super(instance);
    }
}
