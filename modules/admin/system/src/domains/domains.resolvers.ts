import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { Domain, DomainsService } from './domains.service'

@Injectable()
export class DomainResolver implements Resolve<Domain> {
  constructor(private service: DomainsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Domain> {
    return this.service.getItem(route.params.id)
  }
}
