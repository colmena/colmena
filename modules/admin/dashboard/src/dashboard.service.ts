import { Injectable } from '@angular/core'

import { SystemUser, SystemUserApi } from '@colmena/admin-lb-sdk'
export { SystemUser as User } from '@colmena/admin-lb-sdk'
import { FormService } from '@colmena/admin-ui'

@Injectable()
export class DashboardService {
  constructor(private api: SystemUserApi, private formService: FormService) {}

  public formConfigPassword() {
    return {
      fields: [
        this.formService.password('password', {
          label: 'Password',
          placeholder: 'Must be at least 5 characters',
        }),
        this.formService.password('password', {
          label: 'Confirm Password',
          placeholder: 'Re-enter the password to confirm',
        }),
      ],
      showCancel: false,
      hasHeader: false,
    }
  }

  public formConfigProfile() {
    return {
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
