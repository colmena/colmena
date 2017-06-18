import { Component } from '@angular/core'
import { DevModule } from '../dev.module'

@Component({
  selector: 'app-index',
  template: `
    <ui-page [tabs]="tabs" title="Development">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {

  public tabs = [
    { icon: 'icon-wrench', title: 'Dashboard', link: 'dashboard' },
    ...DevModule.navLinks,
  ]

}
