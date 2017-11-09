import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'

@Component({
  selector: 'layout-header-user',
  template: `
    <li class="nav-item dropdown pr-1" dropdown>
      <a class="nav-link dropdown-toggle"
         data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle>
        <img class="img-avatar" [src]="user?.avatar">
        <span class="hidden-md-down">
          {{user?.firstName}} {{user?.lastName}}
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" *dropdownMenu aria-labelledby="simple-dropdown">
        <a class="dropdown-item" [routerLink]="[ '/', 'profile' ]"><i class="icon-user"></i> Profile</a>
        <a class="dropdown-item" [routerLink]="[ '/', 'password' ]"><i class="icon-key"></i> Password</a>
        <a class="dropdown-item" [routerLink]="[ '/', 'logout' ]"><i class="fa fa-lock"></i> Logout</a>
      </div>
    </li>
  `,
  styles: [
    `
    .avatar {
      height: 50px;
      width: 50px;
    }
  `,
  ],
})
export class HeaderUserComponent {
  public user: any

  constructor(private store: Store<any>) {
    this.store.select('auth').subscribe((res: any) => (this.user = get(res, 'currentUser.user', {})))
  }
}
