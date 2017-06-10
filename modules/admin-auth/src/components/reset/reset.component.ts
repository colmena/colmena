import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LoopBackAuth, SDKToken } from '@colmena/admin-lb-sdk'

import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-password-reset',
  template: `
    <ui-message>
      <h3>Reset Password</h3>
      <p>Thanks for verifying your account. Let's get you a new password.</p>
      <div class="input-group mb-1">
        <span class="input-group-addon"><i class="icon-lock"></i></span>
        <input [(ngModel)]="user.password" required="true" type="password" class="form-control" placeholder="Password">
      </div>
      <div class="input-group mb-1">
        <span class="input-group-addon"><i class="icon-lock"></i></span>
        <input [(ngModel)]="user.verify" required="true" type="password" class="form-control" placeholder="Verify">
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button type="submit" class="btn btn-block btn-primary px-2" (click)="reset()">Reset password</button>
        </div>
      </div>
    </ui-message>
  `
})
export class ResetComponent {
  private token: string = null
  public user: any = {
    password: '',
    verify: '',
  }
  public realms: any[] = []

  constructor(
    private loopBackAuth: LoopBackAuth,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params: any) => {
      console.log('setting token', params.token)
      this.loopBackAuth.setToken(new SDKToken({ id: params.token, created: new Date() }))
    })
  }

  reset() {
    this.authService.reset(this.user)
  }


}
