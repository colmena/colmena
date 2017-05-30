import { get } from 'lodash'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {

  public user = {}
  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('auth')
      .subscribe((res: any) => {
        this.user = get(res, 'currentUser.user')
      })
  }

}
