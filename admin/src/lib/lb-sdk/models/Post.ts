/* tslint:disable */
import {
  Domain,
  File
} from '../index';

declare var Object: any;
export interface PostInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "title"?: any;
  "content"?: any;
  "userId"?: any;
  "created"?: any;
  "modified"?: any;
  domain?: Domain;
  file?: File;
}

export class Post implements PostInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "title": any;
  "content": any;
  "userId": any;
  "created": any;
  "modified": any;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "domainId": {
          name: 'domainId',
          type: 'any'
        },
        "fileId": {
          name: 'fileId',
          type: 'any'
        },
        "title": {
          name: 'title',
          type: 'any'
        },
        "content": {
          name: 'content',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'any'
        },
        "modified": {
          name: 'modified',
          type: 'any'
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
