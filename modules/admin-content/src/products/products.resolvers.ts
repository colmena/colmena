import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { ContentProduct, ProductsService } from './products.service'

@Injectable()
export class ProductsResolver implements Resolve<ContentProduct> {
  constructor(private service: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContentProduct> {
    return this.service.getItem(route.params.id)
  }
}
