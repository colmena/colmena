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
          <i class="icon-lock"></i>
        </span>
        <input [(ngModel)]="credentials.password"
          required type="password" class="form-control" placeholder="Password">
      </div>
      <div class="row">
        <div class="col-xs-4">
          <button type="submit" class="btn btn-block btn-primary" (click)="login()">
            Sign in
          </button>
        </div>
        <div class="col-xs-8 text-xs-right">
          <a class="btn btn-outline-primary" [routerLink]="['/', 'password-recover']">
            Forgot Password
          </a>
          <a *ngIf="settings.registrationEnabled" class="btn btn-outline-primary" [routerLink]="['/', 'register']">
            Register
          </a>
        </div>
      </div>
    </ui-message>
  `,
})
export class LoginComponent {

  public settings: any

  public credentials = {
    email: '',
    password: '',
  }

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => {
        this.settings = res.settings

        if (this.settings.nodeEnv === 'development') {
          this.credentials.email = 'admin@example.com'
          this.credentials.password = 'password'
        }
      })
  }

  login() {
    this.store.dispatch({ type: auth.ActionTypes.AUTH_LOGIN, payload: this.credentials })
  }

}
