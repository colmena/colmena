import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../auth.service'

@Component({
  template: `<ui-message [message]="'You are being logged out.'"></ui-message>`,
})
export class LogoutComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.logout()
      .subscribe(() => {
        // TODO: This timeout can be removed when logout does not bounce back
        setTimeout(() => {
          this.router.navigate([ '/', 'login' ])
        }, 500)
      })
  }
}
