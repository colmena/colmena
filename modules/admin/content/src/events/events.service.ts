import { Injectable } from '@angular/core'
import { ContentEvent, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { ContentEvent } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class EventsService extends UiDataGridService {
  public icon = 'icon-event'
  public title = 'Events'
  public files: any[] = []
  public selectedEvent: ContentEvent

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'edit' },
    { field: 'location', label: 'Location' },
  ]

  constructor(
    private domainApi: SystemDomainApi,
    private formService: FormService
  ) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedEvent(event: ContentEvent) {
    this.selectedEvent = event
  }

  getFormFields() {
    return [
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.wysiwyg('description', {
        label: 'Description',
        placeholder: 'Description',
      }),
      this.formService.date('date', {
        label: 'Date',
      }),
      this.formService.input('location', {
        label: 'Location',
        placeholder: 'Location',
      }),
      this.formService.select('storageFileId', {
        label: 'File',
        options: this.files,
      }),
    ]
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.getFormFields(),
      showCancel: true,
      hasHeader: false,
    }
  }

  getFiles() {
    this.domainApi
      .getStorageFiles(this.domain.id)
      .subscribe(files =>
        files.map(file => this.files.push({ value: file.id, label: file.name }))
      )
  }

  getItems(): Observable<ContentEvent[]> {
    return this.domainApi.getContentEvents(
      this.domain.id,
      this.getFilters({ include: ['storageFile'] })
    )
  }

  getItem(id): Observable<ContentEvent> {
    return this.domainApi.findByIdContentEvents(this.domain.id, id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.countContentEvents(
      this.domain.id,
      this.getWhereFilters()
    )
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertEvent(item, successCb, errorCb)
    }
    return this.createEvent(item, successCb, errorCb)
  }

  upsertEvent(item, successCb, errorCb): Subscription {
    return this.domainApi
      .updateByIdContentEvents(this.domain.id, item.id, item)
      .subscribe(successCb, errorCb)
  }

  createEvent(item, successCb, errorCb): Subscription {
    return this.domainApi
      .createContentEvents(this.domain.id, item)
      .subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi
      .destroyByIdContentEvents(this.domain.id, item.id)
      .subscribe(successCb, errorCb)
  }
}
