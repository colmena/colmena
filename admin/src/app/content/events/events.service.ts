import { Injectable } from '@angular/core'

import { Event } from '../../../lib/lb-sdk/models'
import { DomainApi } from '../../../lib/lb-sdk/services'

@Injectable()
export class EventsService {

  public domainId
  public icon = 'icon-calendar'
  public title = 'Events'

  public fields = [
    'id',
    'domainId',
    'name',
    'date',
    'location',
  ]

  public formConfig = {
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
      { name: 'date', label: 'Date', type: 'text', placeholder: 'Date' },
      { name: 'location', label: 'Location', type: 'text', placeholder: 'Location' },
    ],
  }

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'name', label: 'Name', link: 'edit' },
      { field: 'date', label: 'Date' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id) },
    ],
  }

  private item: Event = new Event()
  private items: Event[]

  constructor(private api: DomainApi) {
    this.domainId = 'default'
  }

  deleteItem(id) {
    return this.api.destroyByIdEvents(this.domainId, id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.api.findByIdEvents(this.domainId, id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.api.getEvents(this.domainId).subscribe(res => (this.items = res))
  }

  newItem() {
    this.item = new Event()
  }

  upsertItem(successCb, errorCb): void {
    this.item.domainId = this.domainId
    if (this.item.id) {
      this.api.updateByIdEvents(this.domainId, this.item.id, this.item).subscribe(successCb, errorCb)
    } else {
      this.api.createEvents(this.domainId, this.item).subscribe(successCb, errorCb)
    }
  }

}
