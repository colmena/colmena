import { Injectable } from '@angular/core'
import { SystemDomain as Domain, SystemDomainApi } from '@colmena/admin-lb-sdk'
export { SystemDomain as Domain } from '@colmena/admin-lb-sdk'
import { UiDataGridService, FormService } from '@colmena/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class DomainsService extends UiDataGridService {

  public icon = 'icon-globe'
  public title = 'Domains'
  public selectedDomain: Domain

  public tableColumns = [
    { field: 'id', label: 'ID', action: 'view' },
    { field: 'name', label: 'Name', action: 'view' },
  ]

  constructor(
    private domainApi: SystemDomainApi,
    private formService: FormService,
  ) {
    super()
    this.columns = this.tableColumns
  }

  setSelectedDomain(domain: Domain) {
    this.selectedDomain = domain
  }

  getFormFields() {
    return [
      this.formService.input('id', {
        label: 'ID',
        placeholder: 'ID',
      }),
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.email('email', {
        label: 'Email',
        placeholder: 'Email',
      }),
      this.formService.input('description', {
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

  getItems(): Observable<Domain[]> {
    return this.domainApi.find(this.getFilters())
  }

  getItem(id): Observable<Domain> {
    return this.domainApi.findById(id)
  }

  getItemCount(): Observable<any> {
    return this.domainApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): Subscription {
    if (item.id) {
      return this.upsertDomain(item, successCb, errorCb)
    }
    return this.createDomain(item, successCb, errorCb)
  }

  upsertDomain(item, successCb, errorCb): Subscription {
    return this.domainApi.upsert(item).subscribe(successCb, errorCb)
  }

  createDomain(item, successCb, errorCb): Subscription {
    return this.domainApi.create(item).subscribe(successCb, errorCb)
  }

  deleteItem(item, successCb, errorCb): Subscription {
    return this.domainApi.deleteById(item.id).subscribe(successCb, errorCb)
  }
}
