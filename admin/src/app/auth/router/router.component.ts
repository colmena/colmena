import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  template: '<h1>Redirecting...</h1>',
})
export class RouterComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([ '/', 'dashboard' ])
    } else {
      this.router.navigate([ '/', 'login' ])
    }
  }
}
