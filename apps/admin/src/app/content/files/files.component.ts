import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiService } from '@colmena/colmena-angular-ui'

import { FilesService } from './files.service'

@Component({
  selector: 'app-content-files',
  template: `
    <ui-modal-form #form>
      <app-ui-uploader [url]="uploadUrl"></app-ui-uploader>
    </ui-modal-form>

    <ui-modal-form #importForm>
      <ui-form [config]="formConfig" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-modal-form #view>
      <app-content-file [item]="item"></app-content-file>
    </ui-modal-form>

    <ng-template #iconTemplate let-item="item">
      <div class="card-header" (click)="action({ action: 'view', item: item })">
        <i class="icon-doc"></i> {{ item.name }}
      </div>
      <div class="card-block">
        <img src="{{item.url}}" class="img-fluid" >
      </div>
    </ng-template>

    <ui-data-grid
      #grid
      (action)="action($event)"
      [config]="gridConfig"
      [iconTemplate]="iconTemplate"
      [service]="service">
    </ui-data-grid>
  `,
})
export class FilesComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view
  @ViewChild('importForm') private importForm

  public uploadUrl: string = null

  public item: any = {}
  public formConfig: any = {}
  public gridConfig: any = {
    header: {
      buttons: [
        { action: 'add', icon: 'icon-plus', classNames: 'btn btn-outline-success' },
        { action: 'import', icon: ' icon-cloud-download', classNames: 'btn btn-outline-success' },
      ]
    }
  }

  constructor(
    public service: FilesService,
    public uiService: UiService,
    private route: ActivatedRoute,
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.uploadUrl = this.service.getUploadUrl()
    this.formConfig = this.service.getFormConfig()
  }

  save(item): void {
    console.log('item', item)
    this.service.importFile(
      item,
      () => {
        this.uiService.toastSuccess('File imported', item.url)
        this.form.hide()
        this.grid.refreshData()
      },
      err => this.uiService.toastError('Error saving file', err.message)
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
        this.item = Object.assign({}, { title: null, content: null })
        this.form.title = 'Upload Files'
        this.form.show()
        break
      case 'view':
        this.item = event.item
        this.view.title = `${this.item.name}`
        this.view.show()
        break
      case 'import':
        this.importForm.show()
        break
      case 'cancel':
        this.form.hide()
        break
      case 'close':
        this.grid.refreshData()
        break
      case 'save':
        this.save(event.item)
        break
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item,
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
