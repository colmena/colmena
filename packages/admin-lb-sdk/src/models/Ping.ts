/* tslint:disable */

declare var Object: any;
export interface PingInterface {
  "id"?: string;
}

export class Ping implements PingInterface {
  "id": string;
  constructor(data?: PingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ping`.
   */
  public static getModelName() {
    return "Ping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ping for dynamic purposes.
  **/
  public static factory(data: PingInterface): Ping{
    return new Ping(data);
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
      name: 'Ping',
      plural: 'Ping',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
