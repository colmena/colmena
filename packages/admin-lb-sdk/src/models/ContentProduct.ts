/* tslint:disable */
import { StorageFile, SystemDomain, SystemUser } from '../index'

declare var Object: any
export interface ContentProductInterface {
  name?: string
  description?: string
  sku?: string
  price?: number
  id?: number
  systemDomainId?: string
  systemUserId?: string
  storageFileId?: string
  created?: Date
  modified?: Date
  storageFile?: StorageFile
  systemDomain?: SystemDomain
  systemUser?: SystemUser
}

export class ContentProduct implements ContentProductInterface {
  name: string
  description: string
  sku: string
  price: number
  id: number
  systemDomainId: string
  systemUserId: string
  storageFileId: string
  created: Date
  modified: Date
  storageFile: StorageFile
  systemDomain: SystemDomain
  systemUser: SystemUser
  constructor(data?: ContentProductInterface) {
    Object.assign(this, data)
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentProduct`.
   */
  public static getModelName() {
    return 'ContentProduct'
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentProduct for dynamic purposes.
  **/
  public static factory(data: ContentProductInterface): ContentProduct {
    return new ContentProduct(data)
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
      name: 'ContentProduct',
      plural: 'ContentProducts',
      path: 'ContentProducts',
      properties: {
        name: {
          name: 'name',
          type: 'string',
        },
        description: {
          name: 'description',
          type: 'string',
        },
        sku: {
          name: 'sku',
          type: 'string',
        },
        price: {
          name: 'price',
          type: 'number',
        },
        id: {
          name: 'id',
          type: 'number',
        },
        systemDomainId: {
          name: 'systemDomainId',
          type: 'string',
        },
        systemUserId: {
          name: 'systemUserId',
          type: 'string',
        },
        storageFileId: {
          name: 'storageFileId',
          type: 'string',
        },
        created: {
          name: 'created',
          type: 'Date',
        },
        modified: {
          name: 'modified',
          type: 'Date',
        },
      },
      relations: {
        storageFile: {
          name: 'storageFile',
          type: 'StorageFile',
          model: 'StorageFile',
        },
        systemDomain: {
          name: 'systemDomain',
          type: 'SystemDomain',
          model: 'SystemDomain',
        },
        systemUser: {
          name: 'systemUser',
          type: 'SystemUser',
          model: 'SystemUser',
        },
      },
    }
  }
}
