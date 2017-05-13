import { Injectable } from '@angular/core'

import { SettingApi } from '@lb-sdk'

import { UiDataGridService, FormService } from '@colmena/colmena-angular-ui'

@Injectable()
export class SettingsService extends UiDataGridService {

  public icon = 'icon-settings'
  public title = 'Settings'

  public tableColumns = [
    {field: 'key', label: 'Key', action: 'edit'},
    {field: 'value', label: 'Value', action: 'edit'},
  ]

  public formFields = [
    this.formService.input('key', {
      label: 'Key',
      placeholder: 'Key',
    }),
    this.formService.input('value', {
      label: 'Value',
      placeholder: 'Value',
    }),
    this.formService.input('description', {
      label: 'Description',
      placeholder: 'Description',
    }),
    this.formService.input('type', {
      label: 'Type',
      placeholder: 'Type',
    }),
  ]

  constructor(
    public settingApi: SettingApi,
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
    return this.settingApi.find(this.getFilters())
  }

  getItemCount() {
    return this.settingApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    this.settingApi.upsert(item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb) {
    this.settingApi
      .deleteById(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
