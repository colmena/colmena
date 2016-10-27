import {Injectable} from '@angular/core';
import {SettingApi} from '../shared/sdk/services';
import {Setting} from '../shared/sdk/models';

@Injectable()
export class SettingsService {

  constructor(private settingApi: SettingApi) {}

  public icon = 'icon-settings';
  public title = 'Settings';

  public fields = [
    'key',
    'value',
    'description',
    'type',
  ]

  public formConfig = {
    fields: [
      {name: 'key', label: 'Key', type: 'text', placeholder: 'Key'},
      {name: 'value', label: 'Value', type: 'text', placeholder: 'Value'},
      {name: 'description', label: 'Description', type: 'text', placeholder: 'Description'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'key', label: 'Key', link: './'},
      {field: 'value', label: 'Value'},
      {field: 'description', label: 'Description'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Setting = new Setting();
  private items: Setting[];

  deleteItem(id) {
    return this.settingApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.settingApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.settingApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Setting();
  }

  upsertItem(successCb, errorCb): void {
    this.settingApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}
