import { Component, OnInit } from '@angular/core'

import { SettingsService } from './settings.service'

@Component({
  selector: 'app-settings',
  template: `
    <ui-crud-list [service]="service"></ui-crud-list>
  `,
})
export class SettingListComponent implements OnInit {

  constructor(
    public service: SettingsService,
  ) {
  }

  ngOnInit() {
    this.service.getItems()
  }

}
