import { get } from 'lodash'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

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
