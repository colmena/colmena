import { Injectable } from '@angular/core'

import { SystemUser, SystemUserApi } from '@colmena/admin-lb-sdk'
export { SystemUser as User } from '@colmena/admin-lb-sdk'
import { FormService } from '@colmena/admin-ui'

@Injectable()
export class DashboardService {

  constructor(
    private api: SystemUserApi,
    private formService: FormService,
  ) {
  }

  public formConfigProfile() {
    return {
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
  }

  upsertItem(item, successCb, errorCb) {
    return this.api.patchAttributes(item.id, item).subscribe(successCb, errorCb)
  }
}
