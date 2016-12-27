import { Injectable } from '@angular/core'

import { Post } from '../../../lib/lb-sdk/models'
import { DomainApi } from '../../../lib/lb-sdk/services'

@Injectable()
export class PostsService {

  public domainId
  public icon = 'icon-pencil'
  public title = 'Posts'

  public fields = [
    'id',
    'domainId',
    'title',
    'content',
  ]

  public formConfig = {
    fields: [
      { name: 'title', label: 'Title', type: 'text', placeholder: 'Title' },
      { name: 'content', label: 'Content', type: 'text', placeholder: 'Content' },
    ],
  }

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'title', label: 'Title', link: 'edit' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id) },
    ],
  }

  private item: Post = new Post()
  private items: Post[]


  constructor(private api: DomainApi) {
    this.domainId = 'example.com'
  }

  deleteItem(id) {
    return this.api.destroyByIdPosts(this.domainId, id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.api.findByIdPosts(this.domainId, id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.api.getPosts(this.domainId).subscribe(res => (this.items = res))
  }

  newItem() {
    this.item = new Post()
  }

  upsertItem(successCb, errorCb): void {
    this.item.domainId = this.domainId
    if (this.item.id) {
      this.api.updateByIdPosts(this.domainId, this.item.id, this.item).subscribe(successCb, errorCb)
    } else {
      this.api.createPosts(this.domainId, this.item).subscribe(successCb, errorCb)
    }
  }

}
