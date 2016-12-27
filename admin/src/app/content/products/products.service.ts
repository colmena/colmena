import { Injectable } from '@angular/core'

import { Product } from '../../../lib/lb-sdk/models'
import { DomainApi } from '../../../lib/lb-sdk/services'

@Injectable()
export class ProductsService {

  public domainId
  public icon = 'icon-basket'
  public title = 'Products'

  public fields = [
    'id',
    'domainId',
    'name',
    'description',
    'sku',
  ]

  public formConfig = {
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
      { name: 'description', label: 'Description', type: 'text', placeholder: 'Description' },
      { name: 'sku', label: 'SKU', type: 'text', placeholder: 'SKU' },
    ],
  }

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'name', label: 'Name', link: 'edit' },
      { field: 'sku', label: 'SKU', link: 'edit' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id) },
    ],
  }

  private item: Product = new Product()
  private items: Product[]

  constructor(private api: DomainApi) {
    this.domainId = 'example.com'
  }

  deleteItem(id) {
    return this.api.destroyByIdProducts(this.domainId, id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.api.findByIdProducts(this.domainId, id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.api.getProducts(this.domainId).subscribe(res => (this.items = res))
  }

  newItem() {
    this.item = new Product()
  }

  upsertItem(successCb, errorCb): void {
    this.item.domainId = this.domainId
    if (this.item.id) {
      this.api.updateByIdProducts(this.domainId, this.item.id, this.item).subscribe(successCb, errorCb)
    } else {
      this.api.createProducts(this.domainId, this.item).subscribe(successCb, errorCb)
    }
  }

}
