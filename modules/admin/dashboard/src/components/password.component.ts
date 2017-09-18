import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'
import { UiService } from '@colmena/admin-ui'
import { DashboardService } from '../dashboard.service'

@Component({
  selector: 'app-password',
  template: `
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 offset-md-3 mb-1">
          <h5>Change Password</h5>
          <hr/>
          <ui-form [config]="config" [item]="item" (action)="handleAction($event)"></ui-form>
        </div>
      </div>
    </div>
  `,
})
export class PasswordComponent implements OnInit {
  public item: any
  public config: any = {}

  constructor(
    private store: Store<any>,
    private ui: UiService,
    private service: DashboardService,
  ) { }

  ngOnInit() {
    this.config = this.service.formConfigPassword()
    this.store.select('auth')
      .subscribe((res: any) => this.item = get(res, 'currentUser.user'))
  }


  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.ui.alerts.notifySuccess({
              title: 'Change Password Success',
              body: `Your password has been changed successfully`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Change Password Fail',
            body: err.message,
          })
        )
      default:
        return console.log('Unknown Event Action', event)
    }
  }
}
