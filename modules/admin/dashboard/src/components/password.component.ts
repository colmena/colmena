import { get } from 'lodash'
import { Component } from '@angular/core'
import { UiService, FormService } from '@colmena/admin-ui'
import { SystemUserApi } from '@colmena/admin-lb-sdk'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-password',
  template: `
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 offset-md-3 mb-1">
        <h5>Change Password</h5>
        <hr />
        <ui-form [config]="formConfig"
                 [item]="user"
                 (action)="handleAction($event)">
        </ui-form>
      </div>
    </div>
  </div>
  `,
})
export class PasswordComponent {
  public user = {}
  public formConfig: any = {
    hasHeader: false,
    fields: [],
    showCancel: false,
  }

  constructor(
    public service: SystemUserApi,
    private store: Store<any>,
    public uiService: UiService,
    private formService: FormService
  ) {
    this.store.select('auth').subscribe((res: any) => {
      this.user = get(res, 'currentUser.user')
    })
    this.formConfig.fields = [
      this.formService.password('password', {
        label: 'Password',
        placeholder: 'Must be at least 5 characters',
      }),
      this.formService.password('password', {
        label: 'Confirm Password',
        placeholder: 'Re-enter the password to confirm',
      }),
    ]
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service
          .resetPassword(Object.assign(this.user, event.item))
          .subscribe(
            res =>
              this.uiService.toastSuccess(
                'Change Password Success',
                `Your password has been changed successfully`
              ),
            err =>
              this.uiService.toastError('Change Password Fail', err.message)
          )
      default:
        return console.log('Unknown Event Action', event)
    }
  }
}
