import { Injectable } from '@angular/core'

import { DomainApi } from '@colmena/admin-lb-sdk'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

@Injectable()
export class PostsService extends UiDataGridService {

  public icon = 'icon-note'
  public title = 'Posts'
  public files: any[] = []

  public tableColumns = [
    { field: 'title', label: 'Title', action: 'view' },
  ]

  public formFields = [
    this.formService.input('title', {
      label: 'Title',
      placeholder: 'Title'
    }),
    this.formService.textarea('content', {
      label: 'Content',
      placeholder: 'Content'
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
    return this.domainApi.getPosts(this.domain.id, this.getFilters({ include: ['file'] }))
  }

  getItemCount() {
    return this.domainApi.countPosts(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.updateByIdPosts(this.domain.id, item.id, item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.createPosts(this.domain.id, item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .destroyByIdPosts(this.domain.id, item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
