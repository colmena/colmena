/* tslint:disable */
import {
  Domain,
  File
} from '../index';

declare var Object: any;
export interface PostInterface {
  id?: number;
  domainId?: string;
  fileId?: string;
  title?: string;
  content?: string;
  userId?: number;
  created?: Date;
  modified?: Date;
  domain?: Domain;
  file?: File;
}

export class Post implements PostInterface {
  id: number;
  domainId: string;
  fileId: string;
  title: string;
  content: string;
  userId: number;
  created: Date;
  modified: Date;
  domain: Domain;
  file: File;
  constructor(data?: PostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Post for dynamic purposes.
  **/
  public static factory(data: PostInterface): Post{
    return new Post(data);
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
      name: 'Post',
      plural: 'Posts',
      properties: {
        id: {
          name: 'id',
          type: 'number'
        },
        domainId: {
          name: 'domainId',
          type: 'string'
        },
        fileId: {
          name: 'fileId',
          type: 'string'
        },
        title: {
          name: 'title',
          type: 'string'
        },
        content: {
          name: 'content',
          type: 'string'
        },
        userId: {
          name: 'userId',
          type: 'number'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
        domain: {
          name: 'domain',
          type: 'Domain',
          model: 'Domain'
        },
        file: {
          name: 'file',
          type: 'File',
          model: 'File'
        },
      }
    }
  }
}
