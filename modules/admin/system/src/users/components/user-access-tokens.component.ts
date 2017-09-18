import { Component, OnInit } from '@angular/core'
import { UiService } from '@colmena/admin-ui'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-access-tokens',
  templateUrl: './user-access-tokens.component.html',
})
export class UserAccessTokensComponent implements OnInit {

  public item: any
  public items: any[]

  constructor(
    public service: UsersService,
    public ui: UiService,
  ) {
  }

  ngOnInit() {
    this.item = this.service.selectedUser['user']
    this.refreshTokens()
  }

  refreshTokens() {
    this.service.getUserAccessTokens(
      this.item,
      res => this.items = res,
      err => console.error(err)
    )
  }

  handleAction(event) {
    switch (event.type) {
      case 'generateToken':
        return this.service.generateToken(
          this.item,
          () => {
            this.refreshTokens()
            this.ui.alerts.notifySuccess({
              title: 'Generate Token Success',
              body: `A new token has been generated for <u>${this.item.username}</u>`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Generate Token Fail',
            body: err.message,
          })
        )
      case 'deleteToken':
        return this.service.deleteToken(
          {
            user: this.item,
            token: event.payload,
          },
          () => {
            this.refreshTokens()
            this.ui.alerts.notifySuccess({
              title: 'Delete Token Success',
              body: `Token <u>${event.payload.id}</u> has been deleted successfully`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Delete Token Fail',
            body: err.message,
          })
        )
      case 'removeTtl':
        return this.service.removeTtl(
          {
            user: this.item,
            token: event.payload,
          },
          () => {
            this.refreshTokens()
            this.ui.alerts.notifySuccess({
              title: 'Remove TTL Success',
              body: `TTL for token <u>${event.payload.id} has been removed successfully`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Remove TTL Fail',
            body: err.message,
          })
        )
      case 'deleteAllTokens':
        const successCb = () => this.service.deleteAllTokens(
          this.item,
          () => {
            this.refreshTokens()
            this.ui.alerts.notifySuccess({
              title: 'Delete All Tokens Success',
              body: `All tokens for <u>${this.item.username}</u> have been deleted successfully`,
            })
          },
          err => this.ui.alerts.notifyError({
            title: 'Delete All Tokens Fail',
            body: err.message,
          })
        )
        const question = { title: 'Are you sure?', text: 'This action cannot be undone' }
        return this.ui.alerts.alertError(question, successCb, () => ({}))
      default:
        return console.log('Unknown Event Type', event)
    }
  }

}
