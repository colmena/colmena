import { Component, OnInit, OnDestroy } from '@angular/core'
import { UiService } from '@colmena/admin-ui'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/switchMap'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
})
export class UserRolesComponent implements OnInit, OnDestroy {

  public item: any
  public items: any[]
  public columns = [ {
    label: 'Role',
    field: 'name',
  }, {
    label: 'Description',
    field: 'description',
  } ]

  private subscriptions: Subscription[] = []

  constructor(
    public service: UsersService,
    public ui: UiService,
  ) {
  }

  ngOnInit() {
    this.refresh()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

  refresh() {
    const id = this.service.selectedUser[ 'user' ].id
    this.subscriptions.push(
      this.service.getItem(id)
        .subscribe((item) => {
          this.item = item.user
          this.items = item.roles
        }))
  }

  handleAction(event) {
    switch (event.type) {
      case 'addRole':
        return this.service.addUserToRole({
            user: this.item,
            role: event.payload
          },
          () => {
            this.refresh()
            this.ui.alerts.notifySuccess({
              title: 'Add Role Success',
              body: `<u>${this.item.username}</u> has been successfully added to the <u>${event.payload}</u> role`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Add Role Fail',
            body: err.message,
          })
        )
      case 'removeRole':
        return this.service.removeUserFromRole(
          {
            user: this.item,
            role: event.payload
          },
          () => {
            this.refresh()
            this.ui.alerts.notifySuccess({
              title: 'Remove Role Success',
              body: `<u>${this.item.username}</u> has been successfully removed from the <u>${event.payload}</u> role`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Remove Role Fail',
            body: err.message,
          })
        )
      default:
        return console.log('Unknown Event Type', event)
    }
  }

}
