import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductsService} from './products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: ProductsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

  upsert(): void {
    this.service.upsertItem(
      res => this.router.navigate(['../'], {relativeTo: this.route}),
      err => console.error(err)
    )
  }

}
