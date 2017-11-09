import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import * as auth from '../../state/auth.actions'

@Component({
  template: `
    <ui-message>
      <div class="input-group mb-1">
        <span class="input-group-addon">
          <i class="icon-user"></i>
        </span>
        <input [(ngModel)]="credentials.email"
          required type="text" class="form-control" placeholder="Email">
      </div>
      <div class="input-group mb-1">
        <span class="input-group-addon">
          <i class="icon-user"></i>
        </span>
        <input [(ngModel)]="credentials.firstName"
          required type="text" class="form-control" placeholder="First name">
      </div>
      <div class="input-group mb-1">
        <span class="input-group-addon">
          <i class="icon-user"></i>
        </span>
        <input [(ngModel)]="credentials.lastName"
          required type="text" class="form-control" placeholder="Last name">
      </div>
      <div class="input-group mb-1">
        <span class="input-group-addon">
          <i class="icon-lock"></i>
        </span>
        <input [(ngModel)]="credentials.password"
          required type="password" class="form-control" placeholder="Password">
      </div>
      <div class="input-group mb-1">
        <span class="input-group-addon">
          <i class="icon-lock"></i>
        </span>
        <input [(ngModel)]="credentials.confirm"
          required type="password" class="form-control" placeholder="Confirm password">
      </div>
      <div class="row">
        <div class="col-xs-6 text-xs-left">
          <button type="submit" class="btn btn-primary px-2" (click)="register()">
            Register
          </button>
        </div>
        <div class="col-xs-6 text-xs-right">
          <a class="btn btn-outline-primary px-2" [routerLink]="['/', 'login']">
            Sign in
          </a>
        </div>
      </div>
    </ui-message>
  `,
})
export class RegisterComponent {
  public settings: any

  public credentials = {
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirm: '',
  }

  constructor(private store: Store<any>) {
    this.store.select('app').subscribe((res: any) => {
      this.settings = res.settings
    })
  }

  register() {
    this.credentials.username = this.credentials.email
    this.store.dispatch({ type: auth.ActionTypes.AUTH_REGISTER, payload: this.credentials })
  }
}
