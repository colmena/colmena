import { Component } from '@angular/core'
import { navLinks } from '../dev-config.module'

@Component({
  selector: 'app-index',
  template: `
    <ui-page [tabs]="tabs">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {

  public tabs = [
    { icon: 'icon-wrench', title: 'Dashboard', link: 'dashboard' },
    ...navLinks,
  ]

}
