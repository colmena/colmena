/* tslint:disable */
import {
  Domain,
  File
} from '../index';

declare var Object: any;
export interface EventInterface {
  "id"?: any;
  "domainId"?: any;
  "fileId"?: any;
  "name": any;
  "date"?: any;
  "location"?: any;
  "created"?: any;
  "modified"?: any;
  domain?: Domain;
  file?: File;
}

export class Event implements EventInterface {
  "id": any;
  "domainId": any;
  "fileId": any;
  "name": any;
  "date": any;
  "location": any;
  "created": any;
  "modified": any;
  domain: Domain;
  file: File;
  constructor(data?: EventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Event for dynamic purposes.
  **/
  public static factory(data: EventInterface): Event{
    return new Event(data);
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
      name: 'Event',
      plural: 'Events',
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
        "name": {
          name: 'name',
          type: 'any'
        },
        "date": {
          name: 'date',
          type: 'any'
        },
        "location": {
          name: 'location',
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
