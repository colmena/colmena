import { get } from 'lodash'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-password',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ui-card>
          <ui-card-header>
            <i class="icon-key"></i> Password
          </ui-card-header>
          <ui-card-content>
            <pre>{{user | json}}</pre>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
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
