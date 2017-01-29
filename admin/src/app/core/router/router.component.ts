import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { auth } from '@colmena/colmena-angular-auth'

@Component({
  template: `<ui-message [message]="'Redirecting.'"></ui-message>`,
})
export class RouterComponent {

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('auth')
      .subscribe((res: any) => {
        console.log('res', res)
        if (res.loggedIn) {
          return this.store.dispatch({ type: 'APP_REDIRECT_DASHBOARD'})
        }
        return this.store.dispatch({ type: 'APP_REDIRECT_LOGIN'})
      })
  }
}
