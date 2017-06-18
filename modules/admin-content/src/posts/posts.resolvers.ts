import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { ContentPost, PostsService } from './posts.service'

@Injectable()
export class PostsResolver implements Resolve<ContentPost> {
  constructor(private service: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ContentPost> {
    return this.service.getItem(route.params.id)
  }
}
