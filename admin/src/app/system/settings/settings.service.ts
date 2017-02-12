import { Injectable } from '@angular/core'
import { Validators, FormControl } from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { SettingApi } from '@lb-sdk'

@Injectable()
export class SettingsService extends UiDataGridService {

  public icon = 'icon-settings'
  public title = 'Settings'

  constructor(public settingApi: SettingApi,) {
    super()
    this.columns = this.tableColumns()
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

  public tableColumns() {
    return [
      {field: 'key', label: 'Key', action: 'edit'},
      {field: 'value', label: 'Value', action: 'edit'},
    ]
  }

  public formFields = [{
    key: 'key',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Key',
      placeholder: 'Key',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([Validators.required]),
    },
  }, {
    key: 'value',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Value',
      placeholder: 'Value',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([Validators.required]),
    },
  }, {
    key: 'description',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Description',
      placeholder: 'Description',
    },
  }, {
    key: 'type',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Type',
      placeholder: 'Type',
    },
  }];
}
