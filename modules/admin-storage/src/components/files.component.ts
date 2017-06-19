import { Component, ViewChild } from '@angular/core'

import { UiService } from '@colmena/admin-ui'

import { StorageService } from '../storage.service'

@Component({
  selector: 'app-storage-files',
  template: `
    <ui-modal-form #view>
      <app-storage-file [item]="item"></app-storage-file>
    </ui-modal-form>
    <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
  `,
})
export class FilesComponent {

  @ViewChild('grid') private grid
  @ViewChild('view') private view

  public item: any = {}

  constructor(
    public service: StorageService,
    public uiService: UiService,
  ) {
    this.service.domain = { id: 'default' }
  }

  action(event) {
    switch (event.action) {
      case 'view':
        this.item = event.item
        this.view.title = `${this.item.name}`
        this.view.show()
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
