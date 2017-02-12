import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class DomainsService extends UiDataGridService {

  public icon = 'icon-globe'
  public title = 'Domains'

  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns()
  }

  getItems() {
    return this.domainApi.find(this.getFilters())
  }

  getItemCount() {
    return this.domainApi.count(this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.upsert(item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.create(item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .deleteById(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

  public tableColumns() {
    return [
      { field: 'id', label: 'ID', action: 'view' },
      { field: 'name', label: 'Name', action: 'view' },
    ]
  }

  public formFields = [{
    key: 'id',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'ID',
      placeholder: 'ID',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([Validators.required]),
    },
  }, {
    key: 'name',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Name',
      placeholder: 'Name',
      keyup: (field, formControl: FormControl) => {
        console.log(formControl.valid ? 'Valid' : 'Invalid');
      },
    },
    validators: {
      validation: Validators.compose([ Validators.required ]),
    },
  } ];
}
