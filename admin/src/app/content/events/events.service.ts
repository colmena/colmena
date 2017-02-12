import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { Event, EventApi, DomainApi } from '@lb-sdk'

@Injectable()
export class EventsService extends UiDataGridService {

  public _domain
  public domainId
  public icon = 'icon-calendar'
  public title = 'Events'

  set domain(domain) {
    this._domain = domain
  }

  get domain() {
    return this._domain
  }

  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns()
  }

  getItems() {
    return this.domainApi.getEvents(this.domain.id, this.getFilters())
  }

  getItemCount() {
    return this.domainApi.countEvents(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.updateByIdEvents(this.domain.id, item.id, item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.createEvents(this.domain.id, item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .deleteEvents(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

  public tableColumns() {
    return [
      { field: 'name', label: 'Name', action: 'view' },
      { field: 'location', label: 'Location' },
    ]
  }

  public formFields = [{
    key: 'name',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Name',
      placeholder: 'Name',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([ Validators.required ]),
    },
  }, {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      type: 'text',
      label: 'Description',
      placeholder: 'Description'
    },
  }, {
    key: 'date',
    type: 'input',
    templateOptions: {
      type: 'date',
      label: 'Date',
      placeholder: 'Date'
    },
  }, {
    key: 'location',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Location',
      placeholder: 'Location'
    },
  } ];

}
