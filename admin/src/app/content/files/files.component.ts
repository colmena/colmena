import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/colmena-angular-ui'

import { FilesService } from './files.service'

@Component({
  selector: 'app-files',
  template: `
    <ui-modal-form #form>
      <app-ui-uploader [url]="uploadUrl"></app-ui-uploader>
    </ui-modal-form>

    <ui-modal-form #importForm>
      <ui-form [config]="config" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-modal #view>
      <img src="{{item.url}}" class="img-fluid" >
      <p>
        <span class="item-success" title="Linked to {{item?.events?.length}} event(s)">
          <i class="icon-event"></i>
          {{item?.events?.length}}
        </span>  
        <span title="Linked to {{item?.posts?.length}} post(s)">
          <i class="icon-pencil"></i> 
          {{item?.posts?.length}}
        </span>
        <span title="Linked to {{item?.products?.length}} product(s)">
          <i class="icon-basket"></i>
          {{item?.products?.length}}
        </span>  
      </p>
      <pre>{{item | json}}</pre>
    </ui-modal>

    <template #iconTemplate let-item="item">
      <div class="card-header" (click)="action({ action: 'view', item: item })">
        <i class="icon-doc"></i> {{ item.name }}
      </div>
      <div class="card-block">
        <img src="{{item.url}}" class="img-fluid" >
      </div>
    </template>

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
  public config: any = {}
  public gridConfig: any = {
    header: {
      buttons: [
        { action: 'add', icon: 'icon-plus', classNames: 'btn btn-outline-success' },
        { action: 'import', icon: ' icon-cloud-download', classNames: 'btn btn-outline-success' },
      ]
    }
  }

  save(item): void {
    console.log('item', item)
    this.service.importFile(
      item,
      () => {
        this.uiService.toastSuccess('File imported', item.url)
        this.close()
        this.refresh()
      },
      err => this.uiService.toastError('Error saving file', err.message)
    )
  }

  close(): void {
    this.form.hide()
  }

  refresh(): void {
    this.grid.refreshData()
  }

  constructor(
    public service: FilesService,
    public uiService: UiService,
    private route: ActivatedRoute,
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.uploadUrl = this.service.getUploadUrl()
    this.config = {
      icon: this.service.icon,
      showCancel: true,
      fields: this.service.formFields,
    }
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
        this.close()
        break
      case 'close':
        this.refresh()
        break
      case 'save':
        this.save(event.item)
        break
      case 'delete':
        const successCb = () => this.service
          .deleteItem(event.item,
            () => this.refresh(),
            (err) => this.uiService.toastError('Error deleting item', err.message))

        this.uiService.alertQuestion(
          {
            title: 'Are you sure?',
            text: 'The action can not be undone.'
          },
          successCb,
          () => ({})
        )
        break
      default:
        console.log('Unknown event action', event)
        break
    }
  }

}
