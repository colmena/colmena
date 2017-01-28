import { Component, Input } from '@angular/core'
import { LayoutConfigHeader } from '../../layout-config'

@Component({
  selector: 'layout-header',
  template: `
    <header class="navbar">
      <div class="container-fluid">
        <button class="navbar-toggler hidden-lg-up" type="button" mobile-nav-toggle>&#9776;</button>
        <a class="navbar-brand" href="#"></a>
    
        <ul class="nav navbar-nav hidden-md-down">
          <li class="nav-item">
            <a class="nav-link navbar-toggler sidebar-toggle" href="#">&#9776;</a>
          </li>
          <li class="nav-item px-1" *ngFor="let nav of config.nav">
            <i class="{{nav.icon}}"></i>
            <a class="nav-link"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
               [routerLink]="nav.link">{{nav.label}}</a>
          </li>
        </ul>
        
        <ul class="nav navbar-nav float-xs-right hidden-md-down">
          <li class="nav-item dropdown px-1" dropdown>
            <a class="nav-link dropdown-toggle"
               data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle>
              
              <span class="hidden-md-down">admin</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" dropdownMenu aria-labelledby="simple-dropdown">
              <div class="dropdown-header text-xs-center">
                <strong>Settings</strong>
              </div>
              <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a>
              <div class="divider"></div>
              <a class="dropdown-item" href="#"><i class="fa fa-lock"></i> Logout</a>
            </div>
          </li>
          <li class="nav-item" *ngIf="config.aside">
            <a class="nav-link navbar-toggler aside-toggle" href="#">&#9776;</a>
          </li>
        </ul>
      </div>
    </header>
`,
})
export class HeaderComponent {

  @Input() config: LayoutConfigHeader

}
