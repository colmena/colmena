import { Injectable } from '@angular/core'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { Event, EventApi } from '@lb-sdk'

@Injectable()
export class EventsService extends UiDataGridService {

  public item

  constructor(
    public eventApi: EventApi,
  ) {
    super()
    this.api = eventApi
    this.columns = [
      { field: 'name', label: 'Name' },
      { field: 'location', label: 'Location' },
    ]
  }

  getItem(id) {
    if (id) {
      return this.eventApi.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  newItem() {
    this.item = new Event()
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.eventApi.upsert(item).subscribe(successCb, errorCb)
    } else {
      this.eventApi.create(item).subscribe(successCb, errorCb)
    }
  }

}
