import {Component, OnInit} from '@angular/core';

import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  template: '<ui-crud-list [service]="service"></ui-crud-list>'
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}
