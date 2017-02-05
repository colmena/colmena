import {Component, OnInit} from '@angular/core'

import {UsersService} from './users.service'
import {UiService} from "@colmena/colmena-angular-ui";

@Component({
  selector: 'app-users',
  template: `
    <div>
      <div class="card">
        <div class="card-header">
          <i class="{{service.icon}}"></i> {{service.title}}
    
          <div class="float-xs-right">
            <a [routerLink]="['add']" class="btn btn-sm btn-outline-success">Add</a>
          </div>
    
        </div>
        <div class="card-block">
          <ui-table [config]="config" [items]="items" (action)="action($event)"></ui-table>
        </div>
      </div>
    </div>
  `,
})
export class UserListComponent {

  public items: any[] = []
  public config

  constructor(
    public service: UsersService,
    public uiService: UiService,
  ) {
    this.refresh()
    this.config = this.service.getTableConfig()
  }

  refresh() {
    this.service
      .getItems()
      .subscribe(res => this.items = res)
  }

  action(event) {
    switch (event.type) {
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.payload.id)
          .subscribe(() => {
            this.uiService.toastSuccess('User deleted', '')
            this.refresh()
          })

        this.uiService.alertQuestion(
          {
            title: 'Are you sure?',
            text: 'The action can not be undone.'
          },
          successCb,
          () => ({})
        )
        break
    }
  }

}
