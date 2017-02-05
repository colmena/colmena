import { Injectable } from '@angular/core'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { Post, PostApi } from '@lb-sdk'

@Injectable()
export class PostsService extends UiDataGridService {

  public item

  constructor(
    public postApi: PostApi,
  ) {
    super()
    this.api = postApi
    this.columns = [
      { field: 'title', label: 'Title' },
    ]
  }

  getItem(id) {
    if (id) {
      return this.postApi.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  newItem() {
    this.item = new Post()
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.postApi.upsert(item).subscribe(successCb, errorCb)
    } else {
      this.postApi.create(item).subscribe(successCb, errorCb)
    }
  }

}
