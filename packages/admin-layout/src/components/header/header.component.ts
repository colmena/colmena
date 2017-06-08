import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'

@Component({
  selector: 'layout-header',
  template: `
    <header class="navbar">
      <div class="container-fluid">
        <button class="navbar-toggler hidden-lg-up" type="button" mobile-nav-toggle>&#9776;</button>
        <a class="navbar-brand" href="" [routerLink]="['/']"></a>
        <ul class="nav navbar-nav hidden-md-down">
          <li class="nav-item">
            <a class="nav-link navbar-toggler sidebar-toggle" href="#">&#9776;</a>
          </li>
          <layout-header-nav></layout-header-nav>
        </ul>
        <ul class="nav navbar-nav float-xs-right">
          <layout-header-domains></layout-header-domains>
          <layout-header-user></layout-header-user>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    @media (max-width: 991px) {
      a.navbar-brand {
        width: 155px!important;
        margin-left: 60px!important
      }
    }
  `],
})
export class HeaderComponent {

  public config: any

  constructor(
    private store: Store<any>
  ) {
    this.store
      .select('layout')
      .subscribe((res: any) => this.config = get(res, 'header'))
  }

}
