import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class EventsService extends UiDataGridService {

  public icon = 'icon-event'
  public title = 'Events'
  public files: any[] = []

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'location', label: 'Location' },
  ]

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
  }, {
    key: 'fileId',
    type: 'select',
    templateOptions: {
      type: 'text',
      label: 'File',
      options: this.files,
    },
  } ];
  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns
  }

  getItems() {
    return this.domainApi.getEvents(this.domain.id, this.getFilters({ include: ['file'] }))
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
      .destroyByIdEvents(this.domain.id, item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
