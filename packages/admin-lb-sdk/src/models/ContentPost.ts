/* tslint:disable */
import { StorageFile, SystemDomain, SystemUser } from '../index'

declare var Object: any
export interface ContentPostInterface {
  title?: string
  content?: string
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

export class ContentPost implements ContentPostInterface {
  title: string
  content: string
  id: number
  systemDomainId: string
  systemUserId: string
  storageFileId: string
  created: Date
  modified: Date
  storageFile: StorageFile
  systemDomain: SystemDomain
  systemUser: SystemUser
  constructor(data?: ContentPostInterface) {
    Object.assign(this, data)
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContentPost`.
   */
  public static getModelName() {
    return 'ContentPost'
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContentPost for dynamic purposes.
  **/
  public static factory(data: ContentPostInterface): ContentPost {
    return new ContentPost(data)
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
      name: 'ContentPost',
      plural: 'ContentPosts',
      path: 'ContentPosts',
      properties: {
        title: {
          name: 'title',
          type: 'string',
        },
        content: {
          name: 'content',
          type: 'string',
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
