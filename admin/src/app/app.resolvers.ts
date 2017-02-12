import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'

import { Store } from '@ngrx/store'

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
