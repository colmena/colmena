import { Component } from '@angular/core'
import { UiTabLink } from '@colmena/admin-ui'

@Component({
  selector: 'app-dashboard',
  template: `
    <ui-page [tabs]="tabs" title="Colmena Core">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {
  public tabs: UiTabLink[] = [
    { icon: 'fa fa-info', title: 'System Information', link: 'info' },
    { icon: 'fa fa-cubes', title: 'Modules', link: 'modules/api' },
    { icon: 'fa fa-cubes', title: 'Admin Modules', link: 'modules/admin' },
  ]
}
