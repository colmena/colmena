import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { User, UsersService } from '../users.service'

@Component({
  selector: 'app-user-profile',
  template: `
    <ui-form [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class UserProfileComponent implements OnInit {

  public formConfig: any = {}
  public item: any = {}
  public items: any[]

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedUser['user'] || new User()
    this.items = this.service.domains
    this.formConfig = this.service.getFormConfig(this.item && this.item.id)
  }

  handleAction(event) {
    console.log('handleAction', event)
    switch (event.action) {
      case 'save':
        const errorCb = err => this.uiService.toastError('Update Profile Fail', err.message)
        const successCb = () => {
          this.uiService.toastSuccess(
            'Update Profile Success',
            `<u>${event.item.username}</u>'s profile has been ${event.item.id ? 'created' : 'updated '} successfully'`
          )
          this.handleAction({ action: 'cancel' })
        }
        return this.service.upsertItem(event.item, successCb, errorCb)
      case 'cancel':
        return this.router.navigate(['/system/users'])
      default:
        return console.log('Unknown event action:', event)
    }
  }

}
