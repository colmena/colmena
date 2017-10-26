import { Component, ViewChild } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-list',
  template: `
    <div class="card">
      <div class="card-block">
        <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
      </div>
    </div>
  `,
})
export class ProductListComponent {
  @ViewChild('grid') private grid

  constructor(
    public service: ProductsService,
    private ui: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.domain = this.route.snapshot.data['domain']
    this.service.getFiles()
  }

  action(event) {
    switch (event.action) {
      case 'edit':
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
            err =>
              this.ui.alerts.notifyError({
                title: 'Error Deleting Product',
                body: err.message,
              })
          )
        const question = {
          title: 'Are You Sure?',
          text: 'The action can not be undone.',
        }
        return this.ui.alerts.alertQuestion(question, successCb, () => ({}))
      default:
        return console.log('Unknown Event Action', event)
    }
  }
}
