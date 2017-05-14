import { Injectable } from '@angular/core'

import { DomainApi } from '@colmena/admin-lb-sdk'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

@Injectable()
export class EventsService extends UiDataGridService {

  public icon = 'icon-event'
  public title = 'Events'
  public files: any[] = []

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'location', label: 'Location' },
  ]

  public formFields = [
    this.formService.input('name', {
      label: 'Name',
      placeholder: 'Name'
    }),
    this.formService.textarea('description', {
      label: 'Description',
      placeholder: 'Description'
    }),
    this.formService.date('date', {
      label: 'Date'
    }),
    this.formService.input('location', {
      label: 'Location',
      placeholder: 'Location'
    }),
    this.formService.select('fileId', {
      label: 'File',
      options: this.files
    }),
  ]

  constructor(
    public domainApi: DomainApi,
    public formService: FormService,
  ) {
    super()
    this.columns = this.tableColumns
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.formFields,
      showCancel: true,
    }
  }

  getFiles() {
    this.domainApi.getFiles(this.domain.id)
      .subscribe(files => files.map(file => this.files.push({ value: file.id, label: file.name })))
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
