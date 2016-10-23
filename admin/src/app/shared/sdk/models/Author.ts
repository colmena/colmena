/* tslint:disable */
import {
  Domain
} from '../index';

declare var Object: any;
export interface AuthorInterface {
  id?: number;
  domainId?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  active: boolean;
  modified?: any;
  created?: any;
  domain?: Domain;
}

export class Author implements AuthorInterface {
  id: number;
  domainId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  active: boolean;
  modified: any;
  created: any;
  domain: Domain;
  constructor(instance?: AuthorInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Author`.
   */
  public static getModelName() {
    return "Author";
  }
}
