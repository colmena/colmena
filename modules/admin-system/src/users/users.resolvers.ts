import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { User, UsersService } from './users.service'

@Injectable()
export class SystemUserResolver implements Resolve<any> {

  constructor(private service: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.service.getItem(route.params['id'])
  }

}
