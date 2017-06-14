import { Injectable } from '@angular/core'
import { Setting, SettingApi } from '@colmena/admin-lb-sdk'
export { Setting } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class SettingsService extends UiDataGridService {

  public icon = 'icon-settings'
  public title = 'Settings'
  public settings: Setting[]
  public selectedSetting: Setting

  public tableColumns = [
    { field: 'key', label: 'Key', action: 'view' },
    { field: 'value', label: 'Value', action: 'view' },
    { field: 'type', label: 'Type' },
  ]

  constructor(
    private settingApi: SettingApi,
    private formService: FormService,
  ) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedSetting(setting: Setting) {
    this.selectedSetting = setting
  }

  getFormFields(disabled = false) {
    return [
      this.formService.input('key', {
        label: 'Key',
        placeholder: 'Key',
        disabled,
      }),
      this.formService.select('type', {
        label: 'Type',
        options: [
          { label: 'boolean', value: 'boolean' },
          { label: 'integer', value: 'integer' },
          { label: 'string', value: 'string' },
        ],
        disabled,
      }),
      this.formService.input('value', {
        label: 'Value',
        placeholder: 'Value',
        disabled,
      }),
    ]
  }

  getFormConfig(disabled = false) {
    return {
      icon: this.icon,
      fields: this.getFormFields(disabled),
      showCancel: true,
      hasHeader: false,
    }
  }

  getItems(): Observable<Setting[]> {
    return this.settingApi.find(this.getFilters())
  }

  getItem(key): Observable<Setting> {
    return this.settingApi.findById(key)
  }

  getItemCount(): Observable<any> {
    return this.settingApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.key) {
      return this.upsertSetting(item, successCb, errorCb)
    }
    return this.createSetting(item, successCb, errorCb)
  }

  upsertSetting(item, successCb, errorCb): Subscription {
    return this.settingApi.upsert(item).subscribe(successCb, errorCb)
  }

  createSetting(item, successCb, errorCb): Subscription {
    return this.settingApi.create(item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.settingApi.deleteById(item.key).subscribe(successCb, errorCb)
  }
}
