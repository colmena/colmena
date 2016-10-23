import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Product, FireLoopRef} from '../shared/sdk/models';
import {RealTime} from '../shared/sdk/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  private product: Product = new Product();
  private products: Observable<Product[]>;
  private reference: FireLoopRef<Product>;

  constructor(private rt: RealTime) {
    this.reference = this.rt.FireLoop.ref<Product>(Product);
    this.products = this.reference.on('changes');
  }

  upsert(): void {
    if (this.product.id) {
      this.reference.upsert(this.product).subscribe();
      this.new();
    } else {
      this.reference.create(this.product).subscribe(() => this.product = new Product());
    }
  }

  select(product: Product): void {
    this.product = product;
  }

  remove(product: Product): void {
    this.reference.remove(product).subscribe();
  }

  new(): void {
    this.product = new Product();
  }
}
