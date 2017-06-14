import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SettingsService } from '../settings.service'
import { NavTabLink } from '../components/setting-tabs.component'

@Component({
  selector: 'app-setting-detail',
  template: `
    <div class="card">
      <div class="card-header">
        <app-setting-header [item]="item"></app-setting-header>
        <app-setting-tabs [tabs]="tabs"></app-setting-tabs>
      </div>
      <div class="card-block">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      padding-bottom: 0;
    }
  `],
})
export class SettingDetailComponent implements OnInit {
  public tabs: NavTabLink[] = [
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
