import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { ContentPage, PagesService } from './pages.service'

@Injectable()
export class PagesResolver implements Resolve<ContentPage> {
  constructor(private service: PagesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ContentPage> {
    return this.service.getItem(route.params.id)
  }
}
