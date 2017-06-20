import { Component } from '@angular/core'
import { UiTabLink } from '@colmena/admin-ui'

@Component({
  selector: 'app-dashboard',
  template: `
    <ui-page [tabs]="tabs">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {

  public tabs: UiTabLink[] = [
    { icon: 'icon-docs', title: 'Files', link: 'files' },
    { icon: 'icon-cloud-upload', title: 'Upload', link: 'upload' },
    { icon: 'icon-cloud-download', title: 'Download', link: 'download' },
  ]

}
