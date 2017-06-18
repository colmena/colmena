import { Injectable } from '@angular/core'
import { ContentPost, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { ContentPost } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class PostsService extends UiDataGridService {
  public icon = 'icon-note'
  public title = 'Posts'
  public domain: any
  public files: any[] = []
  public selectedPost: ContentPost

  public tableColumns = [{ field: 'title', label: 'Title', action: 'view' }]

  constructor(
    private domainApi: SystemDomainApi,
    private formService: FormService
  ) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedPost(post: ContentPost) {
    this.selectedPost = post
  }

  getFormFields() {
    return [
      this.formService.input('title', {
        label: 'Title',
        placeholder: 'Title',
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
      .subscribe(files =>
        files.map(file => this.files.push({ value: file.id, label: file.name }))
      )
  }

  getItems(): Observable<ContentPost[]> {
    return this.domainApi.getContentPosts(
      this.domain.id,
      this.getFilters({ include: ['storageFile'] })
    )
  }

  getItem(id): Observable<ContentPost> {
    return this.domainApi.findByIdContentPosts(this.domain.id, id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertPost(item, successCb, errorCb)
    }
    return this.createPost(item, successCb, errorCb)
  }

  upsertPost(item, successCb, errorCb): Subscription {
    return this.domainApi
      .updateByIdContentPosts(this.domain.id, item.id, item)
      .subscribe(successCb, errorCb)
  }

  createPost(item, successCb, errorCb): Subscription {
    return this.domainApi
      .createContentPosts(this.domain.id, item)
      .subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi
      .destroyByIdContentPosts(this.domain.id, item.id)
      .subscribe(successCb, errorCb)
  }
}
