import { Injectable } from '@angular/core'
import { ContentProduct, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { ContentProduct } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class ProductsService extends UiDataGridService {
  public icon = 'icon-basket'
  public title = 'Products'
  public files: any[] = []
  public selectedProduct: ContentProduct

  public tableColumns = [{ field: 'name', label: 'Name', action: 'edit' }, { field: 'location', label: 'Location' }]

  constructor(private domainApi: SystemDomainApi, private formService: FormService) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedProduct(event: ContentProduct) {
    this.selectedProduct = event
  }

  getFormFields() {
    return [
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.input('sku', {
        label: 'SKU',
        placeholder: 'SKU',
      }),
      this.formService.wysiwyg('description', {
        label: 'Description',
        placeholder: 'Description',
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
      .subscribe(files => files.map(file => this.files.push({ value: file.id, label: file.name })))
  }

  getItems(): Observable<ContentProduct[]> {
    return this.domainApi.getContentProducts(this.domain.id, this.getFilters({ include: ['storageFile'] }))
  }

  getItem(id): Observable<ContentProduct> {
    return this.domainApi.findByIdContentProducts(this.domain.id, id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.countContentProducts(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertProduct(item, successCb, errorCb)
    }
    return this.createProduct(item, successCb, errorCb)
  }

  upsertProduct(item, successCb, errorCb): Subscription {
    return this.domainApi.updateByIdContentProducts(this.domain.id, item.id, item).subscribe(successCb, errorCb)
  }

  createProduct(item, successCb, errorCb): Subscription {
    return this.domainApi.createContentProducts(this.domain.id, item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi.destroyByIdContentProducts(this.domain.id, item.id).subscribe(successCb, errorCb)
  }
}
