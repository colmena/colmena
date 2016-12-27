/* tslint:disable */
import {
  Domain
} from '../index';

declare var Object: any;
export interface EventInterface {
  id?: number;
  domainId?: string;
  name?: string;
  date?: Date;
  location?: string;
  created?: Date;
  modified?: Date;
  domain?: Domain;
}

export class Event implements EventInterface {
  id: number;
  domainId: string;
  name: string;
  date: Date;
  location: string;
  created: Date;
  modified: Date;
  domain: Domain;
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
        id: {
          name: 'id',
          type: 'number'
        },
        domainId: {
          name: 'domainId',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        date: {
          name: 'date',
          type: 'Date'
        },
        location: {
          name: 'location',
          type: 'string'
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
      }
    }
  }
}
