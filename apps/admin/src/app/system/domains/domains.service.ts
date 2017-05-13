import { Injectable } from '@angular/core'

import { DomainApi } from '@colmena/api-lb-sdk'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

@Injectable()
export class DomainsService extends UiDataGridService {

  public icon = 'icon-globe'
  public title = 'Domains'

  public tableColumns = [
    { field: 'id', label: 'ID', action: 'view' },
    { field: 'name', label: 'Name', action: 'view' },
  ]

  public formFields = [
    this.formService.input('id', {
      label: 'ID',
      placeholder: 'ID'
    }),
    this.formService.input('name', {
      label: 'Name',
      placeholder: 'Name'
    }),
    this.formService.email('email', {
      label: 'Email',
      placeholder: 'Email'
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

  getItems() {
    return this.domainApi.find(this.getFilters())
  }

  getItemCount() {
    return this.domainApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.upsert(item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.create(item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .deleteById(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
