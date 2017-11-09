import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  template: `<ui-message [message]="'Redirecting.'"></ui-message>`,
})
export class RouterComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('auth').subscribe((res: any) => {
      return this.store.dispatch({ type: res.loggedIn ? 'APP_REDIRECT_DASHBOARD' : 'APP_REDIRECT_LOGIN' })
    })
  }
}
