import { Injectable } from '@angular/core'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

import { SystemDomainApi } from '@colmena/admin-lb-sdk'

@Injectable()
export class FilesService extends UiDataGridService {

  public icon = 'icon-doc'
  public title = 'Files'

  public tableColumns = [
    { field: 'name', label: 'Name', action: 'view' },
    { field: 'size', label: 'Size' },
    { field: 'type', label: 'Type' },
  ]

  public formFields = [
    this.formService.input('url', {
      label: 'URL',
      placeholder: 'The URL you want to import',
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
      fields: this.formFields,
      showCancel: true,
    }
  }

  getUploadUrl() {
    const apiConfig = JSON.parse(window.localStorage.getItem('apiConfig'))

    return [ apiConfig.baseUrl, apiConfig.version, 'StorageContainers', this.domain.id, 'upload' ].join('/')
  }

  getItems() {
    return this.domainApi.getStorageFiles(this.domain.id, this.getFilters({
      include: ['events', 'pages', 'posts', 'products'],
    }))
  }

  getItemCount() {
    return this.domainApi.countStorageFiles(this.domain.id, this.getWhereFilters())
  }

  importFile(item, successCb, errorCb): void {
    this.domainApi.importFileByUrl(this.domain.id, item.url).subscribe(successCb, errorCb)
  }

  deleteItem(itemId, successCb, errorCb) {
    this.domainApi
      .destroyByIdStorageFiles(this.domain.id, itemId)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }
}
