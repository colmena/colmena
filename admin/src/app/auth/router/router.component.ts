import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  template: `<ui-message [message]="'Redirecting.'"></ui-message>`,
})
export class RouterComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    // TODO: This timeout can be removed when Settings are resolved using the router
    setTimeout(() => {
      if (this.auth.isAuthenticated()) {
        this.router.navigate([ '/', 'dashboard' ])
      } else {
        this.router.navigate([ '/', 'login' ])
      }
    }, 500)
  }
}
