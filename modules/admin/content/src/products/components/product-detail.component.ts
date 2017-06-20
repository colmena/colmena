import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-detail',
  template: `
    <ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Product'">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class ProductDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
  ]

  public item: any

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.product

    if (!this.item) {
      this.tabs = [{ icon: 'fa fa-plus', title: 'Create', link: '' }]
    }
    this.service.setSelectedProduct(this.item)
  }
}
