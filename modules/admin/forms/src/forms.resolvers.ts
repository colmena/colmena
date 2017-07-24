import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { Form, FormsService } from './forms.service'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class FormsResolver implements Resolve<Form> {
  constructor(private service: FormsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Form> {
    return this.service.getItem(route.params.id)
  }
}


@Injectable()
export class DomainResolver implements Resolve<any> {

  constructor(private store: Store<any>) {}

  resolve() {
    return this.store
      .select('app')
      .map((res: any) => res.activeDomain)
      .take(1)
  }
}
