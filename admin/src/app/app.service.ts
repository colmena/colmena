import { Injectable, VERSION } from '@angular/core'
import { Store } from '@ngrx/store'
import { DomainApi, SettingApi } from '@lb-sdk'

import { LogService } from './log.service'

@Injectable()
export class AppService {

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

  addSidebarLinks(linksArray) {
    this.config.sidebar.nav.push(...linksArray)
  }

  public createSidebar() {
    this.log.info('AppService: Create SideBar')
    this.addSidebarLinks([
      { type: 'item', label: 'Dashboard',   icon: 'icon-speedometer', link: [ '/', 'dashboard' ] },
      { type: 'item', label: 'Events',      icon: 'icon-calendar',    link: [ '/', 'content', 'events' ] },
      { type: 'item', label: 'Posts',       icon: 'icon-pencil',      link: [ '/', 'content', 'posts' ] },
      { type: 'item', label: 'Products',    icon: 'icon-basket',      link: [ '/', 'content', 'products' ] },
      { type: 'item', label: 'Domains',     icon: 'icon-globe',       link: [ '/', 'domains' ] },
      { type: 'item', label: 'Users',       icon: 'icon-user',        link: [ '/', 'users' ] },
      { type: 'item', label: 'Settings',    icon: 'icon-settings',    link: [ '/', 'settings' ] },
      { type: 'item', label: 'Development', icon: 'icon-wrench',      link: [ '/', 'development' ] },
    ])
  }

  public dispatchDomain(domain) {
    this.store.dispatch({ type: 'APP_ADD_DOMAIN', payload: domain })
  }

  public dispatchSetting(setting) {
    this.store.dispatch({ type: 'APP_ADD_SETTING', payload: setting })
  }

  public fetchSettings() {
    this.log.info('AppService: Fetch Settings')
    return this.settingApi
      .find({ fields: { key: true, value: true } })
      .subscribe(res => res.forEach(setting => this.dispatchSetting(setting)))
  }

  public fetchDomains() {
    this.log.info('AppService: Fetch Domains')
    return this.domainApi
      .find({ fields: { id: true, name: true } })
      .subscribe(res => res.forEach(domain => this.dispatchDomain(domain)))
  }

  getSetting(key) {
    return this.settings.get(key)
  }

  constructor(
    private domainApi: DomainApi,
    private log: LogService,
    private settingApi: SettingApi,
    private store: Store<any>
  ) {
  }

}
