/* tslint:disable */

declare var Object: any;
export interface EmailInterface {
  "to": any;
  "from": any;
  "subject": any;
  "text"?: any;
  "html"?: any;
  "id"?: any;
}

export class Email implements EmailInterface {
  "to": any;
  "from": any;
  "subject": any;
  "text": any;
  "html": any;
  "id": any;
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
          type: 'any'
        },
        "from": {
          name: 'from',
          type: 'any'
        },
        "subject": {
          name: 'subject',
          type: 'any'
        },
        "text": {
          name: 'text',
          type: 'any'
        },
        "html": {
          name: 'html',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
