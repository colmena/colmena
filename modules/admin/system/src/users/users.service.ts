import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { SystemUserApi } from '@colmena/admin-lb-sdk'
export { SystemUser as User } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService extends UiDataGridService {
  public icon = 'icon-user'
  public title = 'Users'
  public domains: any[] = []
  public selectedUser: any

  public tableColumns = [
    { field: 'fullName', label: 'Name', action: 'edit' },
    { field: 'email', label: 'Email' },
  ]

  constructor(
    public userApi: SystemUserApi,
    public formService: FormService,
    private store: Store<any>
  ) {
    super()
    this.getDomains()
    this.columns = this.tableColumns
  }

  setSelectedUser(user: any) {
    this.selectedUser = user
  }

  getDomains(): void {
    this.store.select('app').map(data => data['domains']).subscribe(domains => {
      this.domains = domains.map(domain => ({
        label: domain.name,
        value: domain.id,
      }))
    })
  }

  getFormFields(editForm = false) {
    const fields = [
      this.formService.input('firstName', {
        label: 'First name',
        placeholder: 'First name',
      }),
      this.formService.input('lastName', {
        label: 'Last name',
        placeholder: 'Last name',
      }),
      this.formService.email('email', {
        label: 'Email address',
        placeholder: 'Email address',
      }),
    ]
    // Only show password field if we're not on the edit form
    if (!editForm) {
      fields.push(
        this.formService.password('password', {
          label: 'Password',
          placeholder: 'Password',
        })
      )
    }
    return fields
  }

  getFormConfig(editForm = false): any {
    return {
      icon: this.icon,
      fields: this.getFormFields(editForm),
      showCancel: true,
      hasHeader: false,
    }
  }

  getItems(): Observable<any> {
    return this.userApi.find(this.getFilters())
  }

  getItem(id): Observable<any> {
    return this.userApi.info(id)
  }

  getItemCount(): Observable<any> {
    return this.userApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.updateUser(item, successCb, errorCb)
    }
    return this.createUser(item, successCb, errorCb)
  }

  createUser(item, successCb, errorCb): Subscription {
    return this.userApi.create(item).subscribe(successCb, errorCb)
  }

  updateUser(item, successCb, errorCb): Subscription {
    return this.userApi
      .patchAttributes(item.id, item)
      .subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.userApi.deleteById(item.id).subscribe(successCb, errorCb)
  }

  addUserToRole(item, successCb, errorCb): Subscription {
    return this.userApi
      .addRole(item.user.id, item.role)
      .subscribe(successCb, errorCb)
  }

  removeUserFromRole(item, successCb, errorCb): Subscription {
    return this.userApi
      .removeRole(item.user.id, item.role)
      .subscribe(successCb, errorCb)
  }

  getUserAccessTokens(item, successCb, errorCb): Subscription {
    return this.userApi.getAccessTokens(item.id).subscribe(successCb, errorCb)
  }

  generateToken(item, successCb, errorCb): Subscription {
    return this.userApi
      .createAccessTokens(item.id)
      .subscribe(successCb, errorCb)
  }

  removeTtl(item, successCb, errorCb): Subscription {
    return this.userApi
      .updateByIdAccessTokens(item.user.id, item.token.id, { ttl: -1 })
      .subscribe(successCb, errorCb)
  }

  deleteToken(item, successCb, errorCb): Subscription {
    return this.userApi
      .destroyByIdAccessTokens(item.user.id, item.token.id)
      .subscribe(successCb, errorCb)
  }

  deleteAllTokens(item, successCb, errorCb): Subscription {
    return this.userApi
      .deleteAccessTokens(item.id)
      .subscribe(successCb, errorCb)
  }

  changePassword(item, successCb, errorCb): Subscription {
    return this.userApi.resetPassword(item).subscribe(successCb, errorCb)
  }

  resetPassword(item, successCb, errorCb): Subscription {
    return this.userApi.resetPassword(item).subscribe(successCb, errorCb)
  }
}
