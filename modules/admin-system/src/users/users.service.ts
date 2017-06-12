import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { UserApi, User, Domain } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService extends UiDataGridService {

  public icon = 'icon-user'
  public title = 'Users'
  public domains: any[]
  public selectedUser: any

  public tableColumns = [
    { field: 'firstName', label: 'First name', action: 'edit' },
    { field: 'lastName', label: 'Last name', action: 'edit' },
    { field: 'email', label: 'Email' },
    { field: 'realm', label: 'Domain' },
  ]

  public formFields: any[]

  private subscriptions: Subscription[] = []

  constructor(
    public userApi: UserApi,
    public formService: FormService,
    private store: Store<any>,
  ) {
    super()
    this.getDomains()
    this.columns = this.tableColumns
    this.formFields = [
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
        placeholder: 'Password',
      }),
    ]
  }

  // core functions

  endAllSubscriptions() {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe())
  }

  setSelectedUser(user: any) {
    this.selectedUser = user
  }

  getDomains(): void {
    this.subscriptions.push(
      this.store.select('app')
        .subscribe((data) => {
          const domains = data['domains']
          this.domains = domains.map(
            (domain) => Object.assign({}, {
              label: domain.name,
              value: domain.id
            }))
        }))
  }

  getFormConfig(): any {
    return {
      icon: this.icon,
      fields: this.formFields,
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

  upsertItem(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.upsert(
        item
      ).subscribe(successCb, errorCb))
  }

  deleteItem(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.deleteById(
        item.id
      ).subscribe(successCb, errorCb))
  }

  // custom functions

  updateProfile(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.patchAttributes(
        item.id,
        item
      ).subscribe(successCb, errorCb))
  }

  addUserToRole(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.linkRoles(
        item.user.id,
        item.role,
        {
          principalType: 'USER',
          principalId: item.user.id,
          roleId: item.role
        }).subscribe(successCb, errorCb))
  }

  removeUserFromRole(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.unlinkRoles(
        item.user.id,
        item.role
      ).subscribe(successCb, errorCb))
  }

  getUserAccessTokens(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.getAccessTokens(
        item.id
      ).subscribe(successCb, errorCb))
  }

  generateToken(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.createAccessTokens(
        item.id
      ).subscribe(successCb, errorCb))
  }

  removeTtl(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.updateByIdAccessTokens(
        item.user.id,
        item.token.id,
        {
          ttl: -1
        }).subscribe(successCb, errorCb))
  }

  deleteToken(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.destroyByIdAccessTokens(
        item.user.id,
        item.token.id
      ).subscribe(successCb, errorCb))
  }

  deleteAllTokens(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.deleteAccessTokens(
        item.id
      ).subscribe(successCb, errorCb))
  }

  changePassword(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.doPasswordReset(
        item
      ).subscribe(successCb, errorCb))
  }

  resetPassword(item, successCb, errorCb): void {
    this.subscriptions.push(
      this.userApi.resetPassword(
        item
      ).subscribe(successCb, errorCb))
  }

}
