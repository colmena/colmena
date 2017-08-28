import { Component } from '@angular/core'
import { navLinks } from '../dev-config.module'

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="row">
      <span *ngFor="let item of tabs" class="col-md-4">
        <ui-dashboard-icon
          [routerLink]="['..', item.link]"
          [count]="item.link"
          [icon]="item.icon"
          [label]="item.title"
          [type]="item.type">
        </ui-dashboard-icon>
      </span>
    </div>
  `,
})
export class DashboardComponent {

  public tabs = navLinks

}
