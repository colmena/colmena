import { Injectable } from '@angular/core'
import { Validators, FormControl} from '@angular/forms'

import { UiDataGridService } from '@colmena/colmena-angular-ui'

import { DomainApi } from '@lb-sdk'

@Injectable()
export class PagesService extends UiDataGridService {

  public icon = 'icon-doc'
  public title = 'Pages'

  constructor(
    public domainApi: DomainApi,
  ) {
    super()
    this.columns = this.tableColumns()
  }

  getItems() {
    return this.domainApi.getPages(this.domain.id, this.getFilters())
  }

  getItemCount() {
    return this.domainApi.countPages(this.domain.id, this.getWhereFilters())
  }

  upsertItem(item, successCb, errorCb): void {
    if (item.id) {
      this.domainApi.updateByIdPages(this.domain.id, item.id, item).subscribe(successCb, errorCb)
    } else {
      this.domainApi.createPages(this.domain.id, item).subscribe(successCb, errorCb)
    }
  }

  deleteItem(item, successCb, errorCb) {
    this.domainApi
      .deletePages(item.id)
      .subscribe(
        (success) => successCb(success),
        (error) => errorCb(error),
      )
  }

  public tableColumns() {
    return [
      { field: 'name', label: 'Name', action: 'view' },
    ]
  }

  public formFields = [{
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
  }, {
    key: 'content',
    type: 'textarea',
    templateOptions: {
      type: 'text',
      label: 'Content',
      placeholder: 'Content'
    },
  } ];

}
