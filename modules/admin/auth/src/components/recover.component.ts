import { Component } from '@angular/core'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-password-recover',
  template: `
    <ui-message>
      <h3>Lost access to your account?</h3>
      <p>Not a problem. Enter your email address to regain access.</p>
      <div class="input-group mb-1">
        <span class="input-group-addon"><i class="icon-user"></i></span>
        <input [(ngModel)]="user.email" required="true" type="text" class="form-control" placeholder="Email">
      </div>
      <div class="row">
        <div class="col-xs-6 text-xs-left">
          <button type="submit" class="btn btn-block btn-primary px-2" (click)="recover()">Recover</button>
        </div>
        <div class="col-xs-6 text-xs-right">
          <a class="btn btn-block btn-outline-primary px-2" [routerLink]="['/', 'login']">Return to login</a>
        </div>
      </div>
    </ui-message>
  `
})
export class RecoverComponent {
  public user: any = {
    email: '',
  }

  constructor(
    private authService: AuthService,
  ) {}

  recover() {
    this.authService.recover(this.user)
  }

}
