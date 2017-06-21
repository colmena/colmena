import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import * as auth from '../state/auth.actions'

const getAuthUrl = provider => {
  const apiConfig = JSON.parse(window.localStorage.getItem('apiConfig'))
  return [apiConfig.baseUrl, 'auth', provider].join('/')
}

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
      <div *ngFor="let button of socialButtons" class="mt-1">
        <button type="button" class="{{button.classes || btnClass }}" (click)="button.click(item)">
          <i *ngIf="button.icon" class="{{button.icon}}"></i>
          {{button.label}}
        </button>
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

  public socialButtons = [ {
    label: 'Log in with Twitter',
    classes: 'btn btn-block btn-social btn-twitter',
    click: () => this.socialLogin('twitter'),
  }, {
    label: 'Log in with Google',
    classes: 'btn btn-block btn-social btn-google-plus',
    click: () => this.socialLogin('google'),
  } ]

  constructor(
    private router: Router,
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

  socialLogin(provider) {
    const socialUrl = getAuthUrl(provider)

    console.log('Log in using provider' , provider, socialUrl)

    return window.location.href = socialUrl
  }
}
