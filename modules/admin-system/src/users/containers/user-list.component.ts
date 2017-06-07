import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { UiService } from '@colmena/admin-ui'

import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-list',
  template: `
    <ui-modal-form #form>
      <ui-form [config]="formConfig" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
  `,
})
export class UserListComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form

  public item: any = {}
  public formConfig: any = {}

  constructor(
    public service: UsersService,
    public uiService: UiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.formConfig = this.service.getFormConfig()
  }

  save(item): void {
    this.service.upsertItem(
      item,
      (res) => {
        this.uiService.toastSuccess('User saved', res.name)
        this.form.hide()
        this.grid.refreshData()
      },
      (err) => console.error(err)
    )
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        this.item = Object.assign({}, event.item)
        return this.router.navigate([this.item.id], { relativeTo: this.route })
      case 'add':
        this.item = Object.assign({}, { realm: 'default', email: null, firstName: null, lastName: null, password: null })
        this.form.title = 'Add User'
        return this.form.show()
      case 'cancel':
        return this.form.hide()
      case 'save':
        return this.save(event.item)
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item,
          () => this.grid.refreshData(),
          (err) => this.uiService.toastError('Error deleting item', err.message))
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        return this.uiService.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown event action', event)
    }
  }

}
