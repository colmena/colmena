import { Component } from '@angular/core'

import { AppService } from '../../../../app/app.service'

@Component({
  template: `
    <layout-header  [config]="config.header">   </layout-header>
    <layout-sidebar [config]="config.sidebar">  </layout-sidebar>
    <layout-main    [config]="config.main">
      <router-outlet></router-outlet>
    </layout-main>
    <layout-footer  [config]="config.footer">   </layout-footer>
    <ng2-toasty></ng2-toasty>
  `,
})
export class FullLayoutComponent {

  public config

  constructor(
    private app: AppService,
  ) {
    this.config = this.app.getLayoutConfig()
  }

}
