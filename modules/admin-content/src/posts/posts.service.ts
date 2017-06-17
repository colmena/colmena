import { Injectable } from '@angular/core'

import { SystemDomainApi } from '@colmena/admin-lb-sdk'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

@Injectable()
export class PostsService extends UiDataGridService {

  public icon = 'icon-note'
  public title = 'Posts'
  public files: any[] = []

  public tableColumns = [
    { field: 'title', label: 'Title', action: 'view' },
  ]

  public formFields = () => [
    this.formService.input('title', {
      label: 'Title',
      placeholder: 'Title'
    }),
    this.formService.wysiwyg('content', {
      label: 'Content',
      placeholder: 'Content'
    }),
    this.formService.select('storageFileId', {
      label: 'File',
      options: this.files
    }),
  ]

  constructor(
    public domainApi: SystemDomainApi,
    public formService: FormService,
  ) {
    super()
    this.columns = this.tableColumns
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.formFields(),
      showCancel: true,
    }
  }

  getFiles() {
    this.domainApi.getStorageFiles(this.domain.id)
      .subscribe(files => files.map(file => this.files.push({ value: file.id, label: file.name })))
  }

  getItems() {
    return this.domainApi.getContentPosts(this.domain.id, this.getFilters({ include: ['storageFile'] }))
  }

  getItemCount() {
    return this.domainApi.countContentPosts(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.updateByIdContentPosts(this.domain.id, item.id, item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.createContentPosts(this.domain.id, item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .destroyByIdContentPosts(this.domain.id, item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
