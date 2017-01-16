import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AccessToken } from '@lb-sdk'
import { AuthService } from '../auth.service'

@Component({
  template: `
    <div class="container d-table">
      <div class="d-100vh-va-middle">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card-group">
              <div class="card p-2">
                <div class="card-block">
                  <div class="brand-logo"></div>
                  <div class="input-group mb-1">
                    <span class="input-group-addon">
                      <i class="icon-globe"></i>
                    </span>
                    <input [(ngModel)]="realm"
                      required type="text" class="form-control" placeholder="Domain">
                  </div>
                  <div class="input-group mb-1">
                    <span class="input-group-addon">
                      <i class="icon-user"></i>
                    </span>
                    <input [(ngModel)]="email"
                      required type="text" class="form-control" placeholder="Email">
                  </div>
                  <div class="input-group mb-2">
                    <span class="input-group-addon">
                      <i class="icon-lock"></i>
                    </span>
                    <input [(ngModel)]="password"
                      required type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="row">
                    <div class="col-xs-12 text-xs-right">
                      <button type="submit" class="btn btn-primary px-2" (click)="login()">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {

  public realm = 'example.com'
  public email = 'admin@example.com'
  public password = 'password'

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  login() {
    const credentials = {
      realm: this.realm,
      email: this.email,
      password: this.password,
    }
    return this.auth.login(credentials)
      .subscribe((token: AccessToken) => {
          this.auth.setToken(token)
            .then(() => {
              console.log('We are logged in!', this.auth.isAuthenticated())
              this.router.navigate([ '/dashboard' ])
            })
        },
        err => alert(err.message)
      )
  }

}
