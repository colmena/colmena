import { Component, OnInit } from '@angular/core'
import { StorageService } from '../storage.service'
import { UiService } from '@colmena/admin-ui'

@Component({
  selector: 'app-storage-download',
  template: `
    <ui-form [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
  `,
})
export class DownloadComponent implements OnInit {
  public formConfig

  public item = {}
  constructor(
    public service: StorageService,
    public ui: UiService,
  ) {
  }

  ngOnInit() {
    this.service.domain = { id: 'default' }
    this.formConfig = this.service.getFormConfig()
  }

  save(item): void {
    this.service.importFile(
      item,
      () => {
        this.ui.alerts.notifySuccess({
          title: 'File imported',
          body: item.url,
        })
      },
      err => this.ui.alerts.notifyError({
        title: 'Error saving file',
        body: err.message,
      })
    )
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.save(event.item)
      default:
        console.log('Unknown event action', event)
        break
    }
  }

}
