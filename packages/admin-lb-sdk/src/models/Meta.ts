/* tslint:disable */

declare var Object: any;
export interface MetaInterface {
  "id"?: number;
}

export class Meta implements MetaInterface {
  "id": number;
  constructor(data?: MetaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Meta`.
   */
  public static getModelName() {
    return "Meta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Meta for dynamic purposes.
  **/
  public static factory(data: MetaInterface): Meta{
    return new Meta(data);
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
      name: 'Meta',
      plural: 'Meta',
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
