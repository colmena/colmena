/* tslint:disable */
import {
  Domain,
  Tag
} from '../index';

declare var Object: any;
export interface PostInterface {
  id?: number;
  domainId?: string;
  title?: string;
  content?: string;
  authorId?: number;
  created?: any;
  modified?: any;
  tagId?: number;
  domain?: Domain;
  tag?: Tag;
}

export class Post implements PostInterface {
  id: number;
  domainId: string;
  title: string;
  content: string;
  authorId: number;
  created: any;
  modified: any;
  tagId: number;
  domain: Domain;
  tag: Tag;
  constructor(instance?: PostInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
}
