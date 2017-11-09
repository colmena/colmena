import { Injectable } from '@angular/core'
import { ContentPage, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { ContentPage } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class PagesService extends UiDataGridService {
  public icon = 'icon-book-open'
  public title = 'Pages'
  public selectedPage: ContentPage
  public files: any[] = []

  public tableColumns = [{ field: 'name', label: 'Name', action: 'view' }]

  constructor(private domainApi: SystemDomainApi, private formService: FormService) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedPage(page: ContentPage) {
    this.selectedPage = page
  }

  getFormFields() {
    return [
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.wysiwyg('content', {
        label: 'Content',
        placeholder: 'Content',
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

  getItems(): Observable<ContentPage[]> {
    return this.domainApi.getContentPages(this.domain.id, this.getFilters({ include: ['storageFile'] }))
  }

  getItem(id): Observable<ContentPage> {
    return this.domainApi.findByIdContentPages(this.domain.id, id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.countContentPages(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertPage(item, successCb, errorCb)
    }
    return this.createPage(item, successCb, errorCb)
  }

  upsertPage(item, successCb, errorCb): Subscription {
    return this.domainApi.updateByIdContentPages(this.domain.id, item.id, item).subscribe(successCb, errorCb)
  }

  createPage(item, successCb, errorCb): Subscription {
    return this.domainApi.createContentPages(this.domain.id, item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi.destroyByIdContentPages(this.domain.id, item.id).subscribe(successCb, errorCb)
  }
}
