import { Component } from '@angular/core'
import { DevModule } from '../dev.module'

@Component({
  selector: 'app-index',
  template: `
    <div class="card">
      <div class="card-header">
        <h5 class="my-2">Development</h5>
        <ui-tabs [tabs]="tabs"></ui-tabs>
      </div>
      <div class="card-block">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      padding-bottom: 0;
    }
  `],
})
export class IndexComponent {

  public tabs = [
    { icon: 'icon-wrench', title: 'Dashboard', link: 'dashboard' },
    ...DevModule.navLinks,
  ]

}
