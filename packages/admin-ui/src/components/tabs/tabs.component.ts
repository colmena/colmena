import { Component, Input } from '@angular/core'
import { UiTabLink } from './tabs.interface'

@Component({
  selector: 'ui-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let item of tabs" class="nav-item">
        <a [routerLink]="item.link" routerLinkActive="active" class="nav-link">
          <i [class]="item.icon"></i> &nbsp; {{ item.title }}
        </a>
      </li>
    </ul>
  `,
  styles: [`
    .nav-tabs {
      padding-top: 10px;
    }
    .nav-link {
      min-width: 100px;
      text-align: center;
      border-top: 1px solid #eceff1;
    }
    .nav-link.active,
    .nav-link:focus,
    .nav-link:hover {
      border-top: 1px solid #cfd8dc !important;
      border-bottom: 0;
    }
  `],
})
export class UiTabsComponent {

  @Input() tabs: UiTabLink[]

}
