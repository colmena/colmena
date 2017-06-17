import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiService } from '@colmena/admin-ui'

import { PostsService } from './posts.service'

@Component({
  selector: 'app-content-posts',
  template: `
    <ui-modal-form #form>
      <ui-form [config]="formConfig" [item]="item" (action)="action($event)"></ui-form>
    </ui-modal-form>

    <ui-modal-form #view>
      <app-content-post [item]="item"></app-content-post>
    </ui-modal-form>

    <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
  `,
})
export class PostsComponent {

  @ViewChild('grid') private grid
  @ViewChild('form') private form
  @ViewChild('view') private view

  public item: any = {}
  public formConfig: any = {}

  constructor(
    public service: PostsService,
    public uiService: UiService,
    private route: ActivatedRoute,
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.service.getFiles()
    this.formConfig = this.service.getFormConfig()
  }

  save(item): void {
    this.service.upsertItem(
      item,
      (res) => {
        this.uiService.toastSuccess('Post saved', res.name)
        this.form.hide()
        this.grid.refreshData()
      },
      err => console.error(err)
    )
  }

  action(event) {
    switch (event.action) {
      case 'edit':
        this.formConfig = this.service.getFormConfig()
        this.item = Object.assign({}, event.item)
        this.form.title = `Edit: ${this.item.name}`
        this.form.show()
        break
      case 'add':
        this.formConfig = this.service.getFormConfig()
        this.item = Object.assign({}, { title: null, content: null, storageFileId: null })
        this.form.title = 'Add Post'
        this.form.show()
        break
      case 'view':
        this.item = Object.assign({}, event.item)
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
