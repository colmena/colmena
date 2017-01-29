import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AccessToken, DomainApi } from '@lb-sdk'
import { AuthService } from '../../auth.service'
import { AppService } from '../../../../app/app.service'
import { LogService } from '../../../../app/log.service'
import { UiService } from '@colmena/colmena-angular-ui'

@Component({
  template: `
    <ui-message>
      <div class="input-group mb-1" *ngIf="domains?.length > 1">
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
        <div class="col-xs-12 text-xs-right">
          <button type="submit" class="btn btn-primary px-2" (click)="login()">
            Sign in
          </button>
          <a *ngIf="registrationEnabled" class="btn btn-outline-primary px-2" [routerLink]="['/', 'register']">
            Register
          </a>
        </div>
      </div>
    </ui-message>
    <pre>{{credentials | json}}</pre>
  `,
})
export class LoginComponent {

  public domains: any[]
  public credentials = {
    realm: '',
    email: '',
    password: '',
  }

  public registrationEnabled: boolean = false

  constructor(
    private app: AppService,
    private log: LogService,
    private ui: UiService,
    private auth: AuthService,
    private router: Router,
    private domainApi: DomainApi,
  ) {
    this.log.group('LoginComponent: Init')
    if (this.app.getSetting('nodeEnv') === 'development') {
      this.log.info('Development Mode Enabled', 'Using default credentials')
      this.credentials.realm = 'default'
      this.credentials.email = 'admin@example.com'
      this.credentials.password = 'password'
    }
    if (this.app.getSetting('registrationEnabled') === 'true') {
      this.log.info('Registration Enabled', '')
      this.registrationEnabled = true
    } else {
      this.log.info('Registration Disabled', '')
    }
    this.domainApi
      .find()
      .subscribe(res => {
        this.domains = res
        if (this.domains.length === 1) {
          if (this.app.getSetting('nodeEnv') === 'development') {
            this.log.info('Single Domain configured', `Using default domain: ${this.domains[0]['id']}`)
          }
          this.credentials.realm = this.domains[0]['id']
          this.log.groupEnd()
        }
      })
  }

  login() {
    console.log('this.credentials', JSON.stringify(this.credentials))
    return this.auth.login(this.credentials)
      .subscribe((token: AccessToken) => {
          this.auth.setToken(token)
            .then(() => {
              console.log('We are logged in!', this.auth.isAuthenticated())
              this.router.navigate([ '/dashboard' ])
            })
        },
        err => this.ui.toastError('Login failed', err.message)
      )
  }

}
