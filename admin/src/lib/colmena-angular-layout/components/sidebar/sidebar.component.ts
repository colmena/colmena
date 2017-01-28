import { Component, Input } from '@angular/core'
import { LayoutConfigSidebar } from '../../layout-config'

@Component({
  selector: 'layout-sidebar',
  template: `
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li *ngFor="let nav of config.nav" class="nav-{{nav.type}}">
          <a class="nav-link" routerLinkActive="active" [routerLink]=nav.link [routerLinkActiveOptions]="{exact: true}">
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

  @Input() config: LayoutConfigSidebar

}
