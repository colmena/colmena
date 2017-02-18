import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class FilesService extends UiDataGridService {

  public icon = 'icon-doc'
  public title = 'Files'

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'size', label: 'Size' },
    { field: 'type', label: 'Type' },
  ]

  public formFields = [{
    key: 'url',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'URL',
      placeholder: 'The URL you want to import',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid')
      },
    },
    validators: {
      validation: Validators.compose([ Validators.required ]),
    },
  } ]


  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns
  }

  getUploadUrl() {
    const apiConfig = JSON.parse(window.localStorage.getItem('apiConfig'))

    return [ apiConfig.baseUrl, apiConfig.version, 'Containers', this.domain.id, 'upload' ].join('/')
  }

  getItems() {
    const filters = this.getFilters()

    // filters.include = ['events', 'posts', 'products']
    return this.domainApi.getFiles(this.domain.id, filters)
  }

  getItemCount() {
    return this.domainApi.countFiles(this.domain.id, this.getWhereFilters())
  }

  importFile(item, successCb, errorCb): void {
    this.domainApi.importFileByUrl(this.domain.id, item.url).subscribe(successCb, errorCb)
  }

  deleteItem(itemId, successCb, errorCb) {
    this.domainApi
      .destroyByIdFiles(this.domain.id, itemId)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }
}
