/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  id?: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  realm?: string;
  password: string;
  challenges?: any;
  emailVerified?: boolean;
  verificationToken?: string;
  status?: string;
  created?: any;
  lastUpdated?: any;
  modified?: any;
  accessTokens?: Array<any>;
  roles?: Array<any>;
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
  created: any;
  lastUpdated: any;
  modified: any;
  accessTokens: Array<any>;
  roles: Array<any>;
  constructor(instance?: UserInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
}
