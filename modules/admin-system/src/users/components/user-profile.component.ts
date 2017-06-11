import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService, FormService } from '@colmena/admin-ui'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-profile',
  template: `
    <ui-form [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class UserProfileComponent implements OnInit {

  public formConfig: any = {
    icon: 'fa fa-user',
    fields: [],
    showCancel: true,
    hasHeader: false,
  }
  public item: any
  public items: any[]

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private router: Router,
    private formService: FormService,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedUser['user']
    this.items = this.service.domains
    this.formConfig.fields = [
      this.formService.select('realm', {
        label: 'Domain',
        options: this.items,
      }),
      this.formService.email('email', {
        label: 'Email address',
        placeholder: 'Email address',
      }),
      this.formService.input('firstName', {
        label: 'First name',
        placeholder: 'First name',
      }),
      this.formService.input('lastName', {
        label: 'Last name',
        placeholder: 'Last name',
      }),
    ]
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.updateProfile(
          event.item,
          (res) => this.uiService.toastSuccess('Update Profile Success', `<u>${event.item.username}</u>'s profile has been updated successfully'`),
          (err) => this.uiService.toastError('Update Profile Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/system/users'])
      default:
        return console.log('Unknown event action:', event)
    }
  }

}
