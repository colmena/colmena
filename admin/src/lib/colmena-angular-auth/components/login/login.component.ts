import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import * as auth from '../../state/auth.actions'

@Component({
  template: `
    <ui-message>
      <div class="input-group mb-1" *ngIf="settings.multiDomain">
        <span class="input-group-addon">
          <i class="icon-globe"></i>
        </span>
        <select [(ngModel)]="credentials.realm" name="realm" id="realm" class="form-control">
          <option *ngFor="let domain of domains" [value]="domain.id">{{domain.name}}</option>
        </select>
      </div>
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
        <div class="col-xs-3 text-xs-left">
          <button type="submit" class="btn btn-primary px-2" (click)="login()">
            Sign in
          </button>
        </div>
        <div class="col-xs-9 text-xs-right">
          <a class="btn btn-outline-primary px-2" [routerLink]="['/', 'password-request']">
            Forgot Password
          </a>
          <a *ngIf="settings.registrationEnabled" class="btn btn-outline-primary px-2" [routerLink]="['/', 'register']">
            Register
          </a>
        </div>
      </div>
    </ui-message>
  `,
})
export class LoginComponent {

  public domains: any[]
  public settings: any

  public credentials = {
    realm: 'default',
    email: '',
    password: '',
  }

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => {
        this.domains = res.domains
        this.settings = res.settings
      })
  }

  login() {
    this.store.dispatch({ type: auth.ActionTypes.AUTH_LOGIN, payload: this.credentials })
  }

}
