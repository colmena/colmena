import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'

@Component({
  selector: 'layout-header-nav',
  template: `
    <li class="nav-item px-1" *ngFor="let item of items">
      <a class="nav-link" routerLinkActive="active" [routerLink]="item.link">
        <i *ngIf="item.icon" [class]="item.icon"></i>
        <ng-template *ngIf="item.label">{{item.label}}</ng-template>
      </a>
    </li>
`,
})
export class HeaderNavComponent {
  public items

  constructor(private store: Store<any>) {
    this.store.select('layout').subscribe((res: any) => (this.items = get(res, 'headerNav', [])))
  }
}
