import { Component } from '@angular/core'
import { UiTabLink } from '@colmena/admin-ui'

@Component({
  selector: 'app-dashboard',
  template: `
    <ui-page [tabs]="tabs" title="Colmena Dashboard">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {

  public tabs: UiTabLink[] = [
    { icon: 'icon-speedometer', title: 'Dashboard', link: 'index' },
    { icon: 'icon-user', title: 'Profile', link: 'profile' },
    { icon: 'icon-key', title: 'Password', link: 'password' },
    { icon: 'icon-info', title: 'About', link: 'about' },
  ]
}
