import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from './products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProductsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}
