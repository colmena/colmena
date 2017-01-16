import { Component } from '@angular/core'

import { LoopBackConfig } from '@lb-sdk'
import { LogService } from './log.service'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <ng2-toasty></ng2-toasty>
  `,
})
export class AppComponent {

  private defaultConfig = {
    fullcube: {
      baseUrl: 'http://localhost:3000',
      apiVersion: 'api/v1',
    },
  }

  constructor(
    private app: AppService,
    private log: LogService,
  ) {
    this.log.group( 'AppComponent' )

    const fcConfig = JSON.parse(window.localStorage.getItem('fcConfig')) || this.defaultConfig
    this.log.info(`Configure LoopBack: ${fcConfig.fullcube.baseUrl}/${fcConfig.fullcube.apiVersion}`)

    LoopBackConfig.setBaseURL(fcConfig.fullcube.baseUrl)
    LoopBackConfig.setApiVersion(fcConfig.fullcube.apiVersion)
    this.log.groupEnd()

    this.app.addSidebarLinks([
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

}
