/* tslint:disable */
import {
  Domain,
  Tag
} from '../index';

declare var Object: any;
export interface EventInterface {
  id?: number;
  domainId?: string;
  name?: string;
  date?: any;
  location?: string;
  created?: any;
  modified?: any;
  tagId?: number;
  domain?: Domain;
  tag?: Tag;
}

export class Event implements EventInterface {
  id: number;
  domainId: string;
  name: string;
  date: any;
  location: string;
  created: any;
  modified: any;
  tagId: number;
  domain: Domain;
  tag: Tag;
  constructor(instance?: EventInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
}
