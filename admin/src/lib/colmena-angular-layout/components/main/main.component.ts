import { Component, Input } from '@angular/core'
import { LayoutConfigMain } from '../../layout-config'

@Component({
  selector: 'layout-main',
  template: `
  <!-- Main content -->
  <main class="main">
  
    <!-- Breadcrumb -->
    <ol class="breadcrumb" *ngIf="config.breadcrumbs">
      <layout-breadcrumbs></layout-breadcrumbs>
  
      <!-- Breadcrumb Menu-->
      <li class="breadcrumb-menu" *ngIf="config.nav">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <a *ngFor="let nav of config.nav" class="btn btn-secondary" [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active" [routerLink]="nav.link">
            <i *ngIf="nav.icon" class="{{nav.icon}}"></i>
            {{nav.label}}
          </a>
        </div>
      </li>
    </ol>
  
    <div class="container-fluid">
      <ng-content></ng-content>
    </div>

  </main>
  <aside class="aside-menu">
    
  </aside>
  `,
})
export class MainComponent {

  @Input()
  config: LayoutConfigMain

}
