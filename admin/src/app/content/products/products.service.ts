import { Injectable } from '@angular/core'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { Product, ProductApi } from '@lb-sdk'

@Injectable()
export class ProductsService extends UiDataGridService {

  public item

  constructor(
    public productApi: ProductApi,
  ) {
    super()
    this.api = productApi
    this.columns = [
      { field: 'name', label: 'Product' },
      { field: 'sku', label: 'SKU' },
      { field: 'price', label: 'Price' },
    ]
  }

  getItem(id) {
    if (id) {
      return this.productApi.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  newItem() {
    this.item = new Product()
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.productApi.upsert(item).subscribe(successCb, errorCb)
    } else {
      this.productApi.create(item).subscribe(successCb, errorCb)
    }
  }

}
