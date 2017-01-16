import { Injectable } from '@angular/core'

import { Domain } from '../../../lib/lb-sdk/models'
import { DomainApi } from '../../../lib/lb-sdk/services'

@Injectable()
export class DomainsService {

  public icon = 'icon-globe'
  public title = 'Domains'

  public fields = [
    'id',
    'name',
    'description',
    'created',
    'modified',
  ]

  public formConfig = {
    fields: [
      { name: 'id', label: 'ID', type: 'text', placeholder: 'ID' },
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
    ],
  }

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'name', label: 'Name', link: 'edit' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id) },
    ],
  }

  private item: any = new Domain()
  private items: any[]

  constructor(private domainApi: DomainApi) {
  }

  deleteItem(id) {
    return this.domainApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.domainApi.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.domainApi.find().subscribe(res => (this.items = res))
  }

  newItem() {
    this.item = new Domain()
  }

  upsertItem(successCb, errorCb): void {
    this.domainApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}
