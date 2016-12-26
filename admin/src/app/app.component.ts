import { Component, VERSION } from '@angular/core'

import { CoreUIConfig, CoreUINavItem } from 'coreui-angular/dist'

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
    { type: 'item', label: 'About',       icon: 'icon-info',        link: [ '/', 'about' ] },
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


}
