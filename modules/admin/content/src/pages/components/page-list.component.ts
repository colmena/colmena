import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { PagesService } from '../pages.service'

@Component({
  selector: 'app-page-list',
  template: `
    <div class="card">
      <div class="card-block">
        <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
      </div>
    </div>
  `,
})
export class PageListComponent {
  @ViewChild('grid') private grid
  public formConfig: any = {}

  constructor(
    public service: PagesService,
    private ui: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.service.getFiles()
    this.formConfig = this.service.getFormConfig()
  }

  action(event) {
    switch (event.action) {
      case 'edit':
      case 'view':
        return this.router.navigate([event.item.id], {
          relativeTo: this.route.parent,
        })
      case 'add':
        return this.router.navigate(['create'], {
          relativeTo: this.route.parent,
        })
      case 'delete':
        const successCb = () =>
          this.service.deleteItem(
            event.item,
            () => this.grid.refreshData(),
            err => this.ui.alerts.toastError('Error deleting item', err.message)
          )
        const question = {
          title: 'Are you sure?',
          text: 'The action can not be undone.',
        }
        return this.ui.alerts.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown event action', event)
    }
  }
}
