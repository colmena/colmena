import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  template: `<h1>You are being logged out...</h1>`,
})
export class LogoutComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.logout()
      .subscribe(() => {
        this.router.navigate([ '/', 'router' ])
      })
  }
}
