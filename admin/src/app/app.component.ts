import { Component, VERSION } from '@angular/core'

import { CoreUIConfig, CoreUINavItem } from 'coreui-angular/dist'
import { LoopBackConfig } from '../lib/lb-sdk/lb.config'
import { LogService } from './log.service'

@Component({
  selector: 'app-root',
  template: `
    <coreui-layout [config]="config">
      <router-outlet></router-outlet>
    </coreui-layout>
    <ng2-toasty></ng2-toasty>
  `,
})
export class AppComponent {

  headerNav: CoreUINavItem[] = [
    { label: 'Dashboard', link: [ '/', 'dashboard' ] },
  ]

  sidebarNav: CoreUINavItem[] = [
    { type: 'item', label: 'Dashboard',   icon: 'icon-speedometer', link: [ '/', 'dashboard' ] },
    { type: 'item', label: 'Events',      icon: 'icon-calendar',    link: [ '/', 'content', 'events' ] },
    { type: 'item', label: 'Posts',       icon: 'icon-pencil',      link: [ '/', 'content', 'posts' ] },
    { type: 'item', label: 'Products',    icon: 'icon-basket',      link: [ '/', 'content', 'products' ] },
    { type: 'item', label: 'Domains',     icon: 'icon-globe',       link: [ '/', 'domains' ] },
    { type: 'item', label: 'Users',       icon: 'icon-user',        link: [ '/', 'users' ] },
    { type: 'item', label: 'Settings',    icon: 'icon-settings',    link: [ '/', 'settings' ] },
    { type: 'item', label: 'Development', icon: 'icon-wrench',      link: [ '/', 'development' ] },
  ]

  config: CoreUIConfig = {
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

  private defaultConfig = {
    fullcube: {
      baseUrl: 'http://localhost:3000',
      apiVersion: 'api/v1',
    },
  }

  constructor(
    private log: LogService,
  ) {
    this.log.group( 'AppComponent' )

    const fcConfig = JSON.parse(window.localStorage.getItem('fcConfig')) || this.defaultConfig
    this.log.info(`Configure LoopBack: ${fcConfig.fullcube.baseUrl}/${fcConfig.fullcube.apiVersion}`)

    LoopBackConfig.setBaseURL(fcConfig.fullcube.baseUrl)
    LoopBackConfig.setApiVersion(fcConfig.fullcube.apiVersion)
    this.log.groupEnd()
  }

}
