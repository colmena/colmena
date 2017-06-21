/* tslint:disable */

declare var Object: any;
export interface DevInterface {
  "id"?: number;
}

export class Dev implements DevInterface {
  "id": number;
  constructor(data?: DevInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Dev`.
   */
  public static getModelName() {
    return "Dev";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Dev for dynamic purposes.
  **/
  public static factory(data: DevInterface): Dev{
    return new Dev(data);
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
      name: 'Dev',
      plural: 'Dev',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
