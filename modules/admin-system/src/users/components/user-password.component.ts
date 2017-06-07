import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UiService, FormService } from '@colmena/admin-ui'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-password',
  templateUrl: '../templates/user-password.html',
})
export class UserPasswordComponent {

  // TODO: implement changePassword and resetPassword logic!

  public formConfig: any
  public item: any

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private formService: FormService,
    private router: Router,
  ) {
    this.item = this.service.selectedUser['user']
    this.formConfig = {
      hasHeader: false,
      fields: [
        this.formService.password('password', {
          label: 'Password',
          placeholder: 'Must be at least 5 characters'
        }),
        this.formService.password('password', {
          label: 'Confirm Password',
          placeholder: 'Re-enter the password to confirm'
        }),
      ],
      showCancel: true,
    }
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.changePassword(
          Object.assign(this.item, event.item),
          (res) => this.uiService.toastSuccess('Change Password Success', `<u>${this.item.email}</u>'s password has been changed successfully'`),
          (err) => this.uiService.toastError('Change Password Fail', err.message)
        )
      case 'reset':
        return this.service.resetPassword(
          Object.assign(this.item),
          (res) => this.uiService.toastSuccess('Password Reset Success', `An email with a password recovery link has been sent to <u>${this.item.email}</u>`),
          (err) => this.uiService.toastError('Password Reset Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/system/users'])
      default:
        return console.log('Unknown event action', event)
    }
  }

}
