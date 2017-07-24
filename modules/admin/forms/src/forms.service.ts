import { Injectable } from '@angular/core'

import { FormService, UiDataGridService } from '@colmena/admin-ui'
import { Form, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { Form } from '@colmena/admin-lb-sdk'

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class FormsService extends UiDataGridService {
  public icon = 'icon-form'
  public title = 'Forms'
  public domain: any
  public files: any[] = []
  public selectedForm: any

  public tableColumns = [{ field: 'name', label: 'Name', action: 'view' }]

  constructor(
    private domainApi: SystemDomainApi,
    private formService: FormService
  ) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedForm(form: Form) {
    this.selectedForm = form
  }

  getFormFields() {
    return [
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.textarea('description', {
        label: 'Description',
        placeholder: 'Description',
      }),
    ]
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.getFormFields(),
      showCancel: true,
      hasHeader: false,
    }
  }

  getItems(): Observable<Form[]> {
    return this.domainApi.getForms(
      this.domain.id,
      this.getFilters()
    )
  }

  getItem(id): Observable<Form> {
    return this.domainApi.findByIdForms(this.domain.id, id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertForm(item, successCb, errorCb)
    }
    return this.createForm(item, successCb, errorCb)
  }

  upsertForm(item, successCb, errorCb): Subscription {
    return this.domainApi
      .updateByIdForms(this.domain.id, item.id, item)
      .subscribe(successCb, errorCb)
  }

  createForm(item, successCb, errorCb): Subscription {
    return this.domainApi
      .createForms(this.domain.id, item)
      .subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi
      .destroyByIdForms(this.domain.id, item.id)
      .subscribe(successCb, errorCb)
  }
}
