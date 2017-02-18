import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class PostsService extends UiDataGridService {

  public icon = 'icon-note'
  public title = 'Posts'
  public files: any[] = []

  public tableColumns = [
    { field: 'title', label: 'Title', action: 'view' },
  ]

  public formFields = [{
    key: 'title',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Title',
      placeholder: 'Title',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([ Validators.required ]),
    },
  }, {
    key: 'content',
    type: 'textarea',
    templateOptions: {
      type: 'text',
      label: 'Content',
      placeholder: 'Content'
    },
  }, {
    key: 'fileId',
    type: 'select',
    templateOptions: {
      type: 'text',
      label: 'File',
      options: this.files,
    },
  } ];

  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns
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
      .deletePosts(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
