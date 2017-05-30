import { Component, ViewChild } from '@angular/core'

import { UiService } from '@colmena/admin-ui'

import { SettingsService } from './settings.service'

@Component({
  selector: 'app-settings',
  template: `
    <ui-modal-form #form>
      <ui-form [config]="formConfig" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-modal #view title="View Item">
      <pre>{{item | json}}</pre>
    </ui-modal>

    <ng-template #iconTemplate let-item="item">
      <div class="card-block" style="min-height: 200px">
        <h6 style="text-decoration: underline; cursor: pointer;" (click)="action({ action: 'view', item: item })">
          <i class="icon-settings"></i> {{item.name}}
        </h6>
        <p class="text-muted" *ngIf="item.description">{{item.description}}</p>
      </div>
    </ng-template>

    <ui-data-grid #grid (action)="action($event)" [iconTemplate]="iconTemplate" [service]="service"></ui-data-grid>
  `,
})
export class SettingsComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view

  public item: any = {}
  public formConfig: any = {}

  constructor(
    public service: SettingsService,
    public uiService: UiService,
  ) {
    this.formConfig = this.service.getFormConfig()
  }

  save(item): void {
    this.service.upsertItem(
      item,
      (res) => {
        this.uiService.toastSuccess('Setting saved', res.name)
        this.form.hide()
        this.grid.refreshData()
      },
      err => console.error(err)
    )
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        this.item = Object.assign({}, event.item)
        this.form.title = `Edit: ${this.item.name}`
        this.form.show()
        break
      case 'add':
        this.item = Object.assign({}, { key: null, value: null, description: null, type: null })
        this.form.title = 'Add Setting'
        this.form.show()
        break
      case 'view':
        this.item = event.item
        this.form.title = `${this.item.name}`
        this.view.show()
        break
      case 'cancel':
        this.form.hide()
        break
      case 'save':
        this.save(event.item)
        break
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item.id,
            () => this.grid.refreshData(),
            (err) => this.uiService.toastError('Error deleting item', err.message))
        const question = { title: 'Are you sure?', text: 'The action can not be undone.' }
        this.uiService.alertQuestion( question, successCb, () => ({}) )
        break
      default:
        console.log('Unknown event action', event)
        break
    }
  }

}
