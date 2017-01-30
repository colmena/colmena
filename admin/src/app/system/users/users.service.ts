import { Injectable } from '@angular/core'

import { User } from '../../../lib/lb-sdk/models'
import { UserApi } from '../../../lib/lb-sdk/services'

@Injectable()
export class UsersService {

  public icon = 'icon-user'
  public title = 'Users'

  public fields = [
    'firstName',
    'lastName',
    'email',
  ]

  public formConfig = {
    fields: [
      { name: 'realm', label: 'Domain', type: 'text', placeholder: 'Domain' },
      { name: 'firstName', label: 'First name', type: 'text', placeholder: 'First name' },
      { name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name' },
      { name: 'email', label: 'Email', type: 'text', placeholder: 'Email' },
    ],
  }

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'realm', label: 'Domain'},
      { field: 'firstName', label: 'First name', link: 'edit' },
      { field: 'lastName', label: 'Last name', link: 'edit' },
      { field: 'email', label: 'Email' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id) },
    ],
  }

  private item: any = new User()
  private items: any[]

  constructor(private userApi: UserApi) {
  }


  deleteItem(id) {
    return this.userApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err),
    )
  }

  getItem(id) {
    if (id) {
      return this.userApi.findById(id).subscribe(res => this.item = res)
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.userApi.find().subscribe(res => (this.items = res))
  }

  newItem() {
    this.item = new User()
  }

  upsertItem(successCb, errorCb): void {
    this.userApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}
