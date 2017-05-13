import { Injectable } from '@angular/core'

import { DomainApi } from '@lb-sdk'

import { UiDataGridService, FormService } from '@colmena/colmena-angular-ui'

@Injectable()
export class ProductsService extends UiDataGridService {

  public icon = 'icon-basket'
  public title = 'Products'
  public files: any[] = []

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'description', label: 'Description' },
    { field: 'sku', label: 'SKU' },
  ]

  public formFields = [
    this.formService.input('name', {
      label: 'Name',
      placeholder: 'Name'
    }),
    this.formService.input('sku', {
      label: 'SKU',
      placeholder: 'SKU'
    }),
    this.formService.textarea('description', {
      label: 'Description',
      placeholder: 'Description'
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
    return this.domainApi.getProducts(this.domain.id, this.getFilters({ include: ['file'] }))
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
      .destroyByIdProducts(this.domain.id, item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
