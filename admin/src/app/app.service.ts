import { Injectable, OnInit, VERSION } from '@angular/core'

import { CoreUIConfig, CoreUINavItem } from 'coreui-angular'

@Injectable()
export class AppService implements OnInit {

  headerNav: CoreUINavItem[] = [
    { label: 'Dashboard', link: [ '/', 'dashboard' ] },
  ]

  sidebarNav: CoreUINavItem[] = []

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

  getLayoutConfig() {
    return this.config
  }

  ngOnInit() {

  }

  addSidebarLinks(linksArray) {
    this.config.sidebar.nav.push(...linksArray)
  }

}
