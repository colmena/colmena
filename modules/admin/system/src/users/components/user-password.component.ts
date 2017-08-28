import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService, FormService } from '@colmena/admin-ui'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
})
export class UserPasswordComponent implements OnInit {

  public formConfig: any = {
    hasHeader: false,
    fields: [],
    showCancel: true,
  }

  public item: any

  constructor(
    public service: UsersService,
    public ui: UiService,
    private formService: FormService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.item = this.service.selectedUser['user']
    this.formConfig.fields = [
      this.formService.password('password', {
        label: 'Password',
        placeholder: 'Must be at least 5 characters'
      }),
      this.formService.password('password', {
        label: 'Confirm Password',
        placeholder: 'Re-enter the password to confirm'
      }),
    ]
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.changePassword(
          Object.assign(this.item, event.item),
          res => this.ui.alerts.toastSuccess(
            'Change Password Success', `<u>${this.item.email}</u>'s password has been changed successfully'`
          ),
          err => this.ui.alerts.toastError('Change Password Fail', err.message)
        )
      case 'reset':
        return this.service.resetPassword(
          Object.assign(this.item),
          res => this.ui.alerts.toastSuccess(
            'Password Reset Success', `An email with a password recovery link has been sent to <u>${this.item.email}</u>`
          ),
          err => this.ui.alerts.toastError('Password Reset Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/system/users'])
      default:
        return console.log('Unknown event action', event)
    }
  }

}
