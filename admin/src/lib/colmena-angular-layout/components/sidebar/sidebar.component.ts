import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'layout-sidebar',
  template: `
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li *ngFor="let nav of sidebarNav" class="nav-{{nav.type || 'item'}}">
          <a class="nav-link" routerLinkActive="active" [routerLink]="nav.link">
            <i *ngIf="nav.icon" class="{{nav.icon}}"></i>
            {{nav.label}}
          </a>
        </li>
      </ul>
    </nav>
  </div>
  `,
  styles: []
})
export class SidebarComponent {

  public sidebarNav: any[]

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('layout')
      .subscribe((res: any) => this.sidebarNav = res.sidebarNav)
  }

}
