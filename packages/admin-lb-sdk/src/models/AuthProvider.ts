/* tslint:disable */

declare var Object: any;
export interface AuthProviderInterface {
  "id"?: string;
  "provider"?: string;
  "config"?: any;
}

export class AuthProvider implements AuthProviderInterface {
  "id": string;
  "provider": string;
  "config": any;
  constructor(data?: AuthProviderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AuthProvider`.
   */
  public static getModelName() {
    return "AuthProvider";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AuthProvider for dynamic purposes.
  **/
  public static factory(data: AuthProviderInterface): AuthProvider{
    return new AuthProvider(data);
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
      name: 'AuthProvider',
      plural: 'AuthProviders',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "provider": {
          name: 'provider',
          type: 'string'
        },
        "config": {
          name: 'config',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
