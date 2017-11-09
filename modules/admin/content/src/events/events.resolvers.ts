import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { ContentEvent, EventsService } from './events.service'

@Injectable()
export class EventsResolver implements Resolve<ContentEvent> {
  constructor(private service: EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContentEvent> {
    return this.service.getItem(route.params.id)
  }
}
