import {Injectable} from '@angular/core';
import {ProductApi} from '../shared/sdk/services';
import {Product} from '../shared/sdk/models';

@Injectable()
export class ProductsService {

  constructor(private productApi: ProductApi) {}

  public icon = 'icon-basket';
  public title = 'Products';

  public fields = [
    'id',
    'domainId',
    'name',
    'description',
    'sku',
  ]

  public formConfig = {
    fields: [
      {name: 'name', label: 'Name', type: 'text', placeholder: 'Name'},
      {name: 'description', label: 'Description', type: 'text', placeholder: 'Description'},
      {name: 'sku', label: 'SKU', type: 'text', placeholder: 'SKU'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'name', label: 'Name', link: './'},
      {field: 'sku', label: 'SKU', link: './'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Product = new Product();
  private items: Product[];

  deleteItem(id) {
    return this.productApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.productApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.productApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Product();
  }

  upsertItem(successCb, errorCb): void {
    this.productApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}
