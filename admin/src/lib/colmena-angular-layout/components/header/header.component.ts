import { get } from 'lodash'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

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
          <li class="nav-item px-1" *ngFor="let nav of headerNav">
            <a class="nav-link"
               routerLinkActive="active"
               [routerLink]="nav.link">
               <i *ngIf="nav.icon" [class]="nav.icon"></i>
                {{nav.label}}
               </a>
          </li>
        </ul>
        
        <ul class="nav navbar-nav float-xs-right hidden-md-down">
          <li class="nav-item dropdown px-1" dropdown>
            <a class="nav-link dropdown-toggle"
               data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle>
              
              <span class="hidden-md-down">
                {{user.firstName}} {{user.lastName}}  
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" dropdownMenu aria-labelledby="simple-dropdown">
              <div class="dropdown-header text-xs-center">
                <strong>Settings</strong>
              </div>
              <a class="dropdown-item" [routerLink]="['/', 'profile']"><i class="fa fa-user"></i> Profile</a>
              <div class="divider"></div>
              
              <a class="dropdown-item" *ngFor="let domain of domains" (click)="switchDomain(domain.id)">
                <i class="icon-globe"></i> {{domain.name}}
              </a>

              <div class="divider"></div>
              <a class="dropdown-item" [routerLink]="[ '/', 'logout' ]"><i class="fa fa-lock"></i> Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
`,
})
export class HeaderComponent {

  public headerNav: any[]
  public user = {}
  public domains: any[]


  public switchDomain(newDomain) {
    console.log('Switching current domain to ', newDomain)
  }

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => this.domains = res.domains)
    this.store
      .select('auth')
      .subscribe((res: any) => {
        this.user = get(res, 'currentUser.user') || {}
      })
    this.store
      .select('layout')
      .subscribe((res: any) => this.headerNav = res.headerNav)
  }


}
