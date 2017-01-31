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
      return this.api.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  newItem() {
    this.item = new Event()
  }

  upsertItem(successCb, errorCb): void {
    if (this.item.id) {
      this.api.updateById(this.item.id, this.item).subscribe(successCb, errorCb)
    } else {
      this.api.create(this.item).subscribe(successCb, errorCb)
    }
  }

}
