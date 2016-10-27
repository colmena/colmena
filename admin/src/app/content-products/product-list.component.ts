import {Component, OnInit} from '@angular/core';

import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}
