import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class ProductsService extends UiDataGridService {

  public _domain
  public icon = 'icon-basket'
  public title = 'Products'

  set domain(domain) {
    this._domain = domain
  }

  get domain() {
    return this._domain
  }

  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns()
  }

  getItems() {
    return this.domainApi.getProducts(this.domain.id, this.getFilters())
  }

  getItemCount() {
    return this.domainApi.countProducts(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.updateByIdProducts(this.domain.id, item.id, item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.createProducts(this.domain.id, item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .deleteProducts(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

  public tableColumns() {
    return [
      { field: 'name', label: 'Name', action: 'view' },
      { field: 'description', label: 'Description' },
      { field: 'sku', label: 'SKU' },
    ]
  }

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
    key: 'sku',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'SKU',
      placeholder: 'SKU',
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
  } ];

}
