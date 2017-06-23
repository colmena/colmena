import { get } from 'lodash'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { SystemUser, SystemUserApi } from '@colmena/admin-lb-sdk'
import { UiService, FormService } from '@colmena/admin-ui'

@Component({
  selector: 'app-profile',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img *ngIf="user"
             [src]="user.avatar"
             class="img-fluid rounded float-left mb-2"
             width="200px" />
      </div>
      <div class="col-md-8">
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        <hr />
        <span class="float-right lead">{{ user.email }}</span>
      </div>
      <div class="col-md-12">
        <ui-form *ngIf="user"
                 [config]="formConfig"
                 [item]="user"
                 (action)="handleAction($event)">
        </ui-form>
      </div>
    </div>
  </div>
  `,
})
export class ProfileComponent {
  public user: SystemUser
  public formConfig: any = {}

  constructor(
    private store: Store<any>,
    private service: SystemUserApi,
    public uiService: UiService,
    public formService: FormService
  ) {
    this.store.select('auth').subscribe((res: any) => {
      this.user = get(res, 'currentUser.user')
      this.formConfig = {
        icon: 'fa fa-user',
        fields: [
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
        ],
        showCancel: false,
        hasHeader: false,
      }
    })
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.user,
          () => {
            this.uiService.toastSuccess(
              'Update Profile Success',
              `<u>${event.user.username}</u>'s profile has been ${event.user.id
                ? 'created'
                : 'updated '} successfully'`
            )
            this.handleAction({ action: 'cancel' })
          },
          err => this.uiService.toastError('Update Profile Fail', err.message)
        )
      default:
        return console.log('Unknown Event Action:', event)
    }
  }
}
