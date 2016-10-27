import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from './products.service';

@Component({
  selector: 'app-product-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProductsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}
