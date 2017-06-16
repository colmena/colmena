import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { User, UsersService } from '../users.service'

@Component({
  selector: 'app-user-form',
  template: `
    <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class UserFormComponent implements OnInit {

  public formConfig: any = {}
  public item: any

  constructor(
    private service: UsersService,
    private uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedUser && this.service.selectedUser['user'] || new User()
    this.formConfig = this.service.getFormConfig(this.item && this.item.id)
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.uiService.toastSuccess('Update Profile Success',
              `<u>${event.item.username}</u>'s profile has been ${event.item.id ? 'created' : 'updated '} successfully'`)
            this.handleAction({ action: 'cancel' })
          },
          err => this.uiService.toastError('Update Profile Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/system/users'])
      default:
        return console.log('Unknown event action:', event)
    }
  }

}
