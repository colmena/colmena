import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { SettingsService } from '../settings.service'

@Component({
  selector: 'app-setting-detail',
  template: `
    <ui-page [tabs]="tabs">
      <header>
        <app-setting-header [item]="item"></app-setting-header>
      </header>
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class SettingDetailComponent implements OnInit {

  public tabs: UiTabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
  ]

  public item: any

  constructor(
    private service: SettingsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.systemSetting

    if (!this.item) {
      this.tabs = [
        { icon: 'fa fa-plus', title: 'Create', link: '' },
      ]
    }
    this.service.setSelectedSetting(this.item)
  }
}
