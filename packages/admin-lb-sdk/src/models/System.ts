/* tslint:disable */

declare var Object: any;
export interface SystemInterface {
  "id"?: any;
}

export class System implements SystemInterface {
  "id": any;
  constructor(data?: SystemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `System`.
   */
  public static getModelName() {
    return "System";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of System for dynamic purposes.
  **/
  public static factory(data: SystemInterface): System{
    return new System(data);
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
      name: 'System',
      plural: 'System',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
