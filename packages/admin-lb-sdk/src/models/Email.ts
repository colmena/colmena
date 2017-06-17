/* tslint:disable */

declare var Object: any;
export interface EmailInterface {
  "to": string;
  "from": string;
  "subject": string;
  "text"?: string;
  "html"?: string;
  "id"?: number;
}

export class Email implements EmailInterface {
  "to": string;
  "from": string;
  "subject": string;
  "text": string;
  "html": string;
  "id": number;
  constructor(data?: EmailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Email`.
   */
  public static getModelName() {
    return "Email";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Email for dynamic purposes.
  **/
  public static factory(data: EmailInterface): Email{
    return new Email(data);
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
      name: 'Email',
      plural: 'Emails',
      properties: {
        "to": {
          name: 'to',
          type: 'string'
        },
        "from": {
          name: 'from',
          type: 'string'
        },
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "html": {
          name: 'html',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
