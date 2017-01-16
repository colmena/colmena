import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AccessToken, DomainApi } from '@lb-sdk'
import { AuthService } from '../auth.service'
import { UiService } from '../../ui/ui.service'
import { AppService } from '../../app.service'
import { LogService } from '../../log.service'

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
        <div class="col-xs-12 text-xs-right">
          <button type="submit" class="btn btn-primary px-2" (click)="register()">
            Register
          </button>
          <a class="btn btn-outline-primary px-2" [routerLink]="['/', 'login']">
            Sign in
          </a>
        </div>
      </div>
    </ui-message>           
  `,
})
export class RegisterComponent {

  public domains: any[]

  public credentials = {
    realm: '',
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirm: '',
  }

  constructor(
    private app: AppService,
    private auth: AuthService,
    private log: LogService,
    private ui: UiService,
    private router: Router,
    private domainApi: DomainApi,
  ) {
    this.log.group('RegisterComponent: init')

    if (this.app.getSetting('registrationEnabled') !== 'true') {
      this.log.info('Registration Disabled', '')
      this.ui.toastInfo('Registration Disabled', '')
      this.router.navigate([ '/', 'login' ])
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

  register() {
    this.credentials.username = this.credentials.email
    return this.auth.register(this.credentials)
      .subscribe(res => {
        this.ui.toastSuccess('Registered', 'You are registered.')
        return this.auth.login(this.credentials)
          .subscribe((token: AccessToken) => {
              this.auth.setToken(token)
                .then(() => {
                  this.ui.toastSuccess('Logged in', 'You are logged in.')
                  this.router.navigate([ '/', 'dashboard' ])
                })
            },
            err => this.ui.toastError('Login failed', err.message)
          )
        },
        err => this.ui.toastError('Registration failed', err.message)
      )
  }

}
