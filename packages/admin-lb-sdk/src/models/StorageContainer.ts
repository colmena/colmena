/* tslint:disable */

declare var Object: any
export interface StorageContainerInterface {
  id?: number
}

export class StorageContainer implements StorageContainerInterface {
  id: number
  constructor(data?: StorageContainerInterface) {
    Object.assign(this, data)
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StorageContainer`.
   */
  public static getModelName() {
    return 'StorageContainer'
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StorageContainer for dynamic purposes.
  **/
  public static factory(data: StorageContainerInterface): StorageContainer {
    return new StorageContainer(data)
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
      name: 'StorageContainer',
      plural: 'StorageContainers',
      path: 'StorageContainers',
      properties: {
        id: {
          name: 'id',
          type: 'number',
        },
      },
      relations: {},
    }
  }
}
