import { Component } from '@angular/core'

import { AppService } from '../../app.service'

@Component({
  template: `
    <coreui-layout [config]="config">
      <router-outlet></router-outlet>
    </coreui-layout>
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
