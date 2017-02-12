import { Injectable } from '@angular/core'
import { Validators, FormControl } from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { UserApi } from '@lb-sdk'

@Injectable()
export class UsersService extends UiDataGridService {

  public icon = 'icon-user'
  public title = 'Users'
  public domains = []

  constructor(public userApi: UserApi,) {
    super()
    this.columns = this.tableColumns()
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

  public tableColumns() {
    return [
      { field: 'firstName', label: 'First name', link: 'edit' },
      { field: 'lastName', label: 'Last name', link: 'edit' },
      { field: 'email', label: 'Email' },
      { field: 'realm', label: 'Domain'},
    ]
  }

  public formFields = [{
    key: 'realm',
    type: 'select',
    templateOptions: {
      type: 'text',
      label: 'Domain',
      options: this.domains,
    },
    validators: {
      validation: Validators.compose([Validators.required])
    }
  }, {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email'
    },
    validators: {
      validation: Validators.compose([Validators.required])
    }
  }, {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'First name',
      placeholder: 'First name'
    },
    validators: {
      validation: Validators.compose([Validators.required])
    }
  }, {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Last name',
      placeholder: 'Last name'
    },
    validators: {
      validation: Validators.compose([Validators.required])
    }
  }, {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      pattern: ''
    },
    validators: {
      validation: Validators.compose([Validators.required])
    }
  }];

}
