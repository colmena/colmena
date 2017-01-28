import { Injectable, OnInit, VERSION } from '@angular/core'

import { SettingApi } from '@lb-sdk'

@Injectable()
export class AppService implements OnInit {

  settings: Map<string, any> = new Map()

  headerNav: any[] = [
    { label: 'Dashboard', link: [ '/', 'dashboard' ] },
  ]

  sidebarNav: any[] = []

  config: any = {
    footer: {
      left: 'Colmena CMS',
      right: 'angular@' + VERSION.full,
    },
    header: {
      aside: false,
      nav: this.headerNav,
    },
    main: {
      breadcrumbs: true,
    },
    sidebar: {
      nav: this.sidebarNav,
    }
  }

  getLayoutConfig() {
    return this.config
  }

  ngOnInit() {

  }

  addSidebarLinks(linksArray) {
    this.config.sidebar.nav.push(...linksArray)
  }

  fetchSettings() {
    return this.settingApi
      .find()
      .subscribe(res => {
        res.forEach(setting => this.settings.set(setting['key'], setting['value']))
      })
  }

  getSetting(key) {
    return this.settings.get(key)
  }

  constructor(
    private settingApi: SettingApi,
  ) {
  }

}
