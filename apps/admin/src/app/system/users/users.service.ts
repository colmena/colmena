import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { UserApi } from '@colmena/admin-lb-sdk'

import { UiDataGridService, FormService } from '@colmena/admin-ui'

@Injectable()
export class UsersService extends UiDataGridService {

  public icon = 'icon-user'
  public title = 'Users'
  public domains = []

  public tableColumns = [
    { field: 'firstName', label: 'First name', link: 'edit' },
    { field: 'lastName', label: 'Last name', link: 'edit' },
    { field: 'email', label: 'Email' },
    { field: 'realm', label: 'Domain'},
  ]

  public formFields = [
    this.formService.select('realm', {
      label: 'Domain',
      options: this.domains,
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
    this.formService.password('password', {
      label: 'Password',
      placeholder: 'Password'
    }),
  ]

  constructor(
    public userApi: UserApi,
    public formService: FormService,
    private store: Store<any>,
  ) {
    super()
    this.columns = this.tableColumns
  }

  getDomains() {
    this.store
      .select('app')
      .subscribe((res: any) => {
        res.domains.map(domain => this.domains.push({ value: domain.id, label: domain.name }))
      })
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.formFields,
      showCancel: true,
    }
  }

  getItems() {
    return this.userApi.find(this.getFilters())
  }

  getItemCount() {
    return this.userApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    this.userApi.upsert(item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb) {
    this.userApi
      .deleteById(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

}
