import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from '@colmena/admin-ui'

import { ContentProduct, ProductsService } from '../products.service'

@Component({
  selector: 'app-product-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6">
        <app-content-product [item]="item"></app-content-product>
      </div>
    </div>
  `,
})
export class ProductFormComponent implements OnInit {
  public formConfig: any = {}
  public item: any

  constructor(
    private service: ProductsService,
    private ui: UiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.item = this.service.selectedProduct || new ContentProduct()
    this.formConfig = this.service.getFormConfig()
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.service.upsertItem(
          event.item,
          () => {
            this.ui.alerts.toastSuccess(
              'Save Product Success',
              `<u>${event.item.name}</u> has been saved successfully`
            )
            this.handleAction({ action: 'cancel' })
          },
          err => this.ui.alerts.toastError('Save Product Fail', err.message)
        )
      case 'cancel':
        return this.router.navigate(['/content/products'])
      default:
        return console.log('Unknown Event Action:', event)
    }
  }
}
