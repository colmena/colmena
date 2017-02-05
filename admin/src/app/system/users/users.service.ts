import { Injectable } from '@angular/core'

import { Validators } from '@angular/forms'

import { UserApi } from '@lb-sdk'


@Injectable()
export class UsersService {

  public icon = 'icon-user'
  public title = 'Users'

  constructor(
    private userApi: UserApi,
  ) {
  }

  getTableConfig() {
    return {
      class: 'table table-bordered table-striped table-condensed',
      columns: [
        { field: 'realm', label: 'Domain'},
        { field: 'firstName', label: 'First name', link: 'edit' },
        { field: 'lastName', label: 'Last name', link: 'edit' },
        { field: 'email', label: 'Email' },
      ],
      rowButtons: [
        { typeName: 'delete', className: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash' },
      ],
    }
  }

  getFormFields(domains) {
    return [{
      fieldGroup: [{
        key: 'realm',
        type: 'select',
        templateOptions: {
          type: 'text',
          label: 'Domain',
          options: domains,
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
      }]
    }]
  }

  deleteItem(id) {
    return this.userApi.deleteById(id)
  }

  getItem(id) {
    return this.userApi.findById(id)
  }

  getItems() {
    return this.userApi.find()
  }

  upsertItem(item, successCb, errorCb): void {
    console.log('item', item)
    this.userApi.upsert(item).subscribe(successCb, errorCb)
  }

}
