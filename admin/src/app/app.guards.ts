import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { UiService } from '@colmena/colmena-angular-ui'

@Injectable()
export class HasSystemAccess implements CanActivate {

  constructor(
    private store: Store<any>,
    private uiService: UiService,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.store
      .select('auth')
      .map((res: any) => res.roles.assigned)
      .map((roles: any) => {
        if(roles.includes('admin')) {
          return true
        }
        this.uiService.toastError('Access Denied', 'Your assigned roles do not allow access.')
        return false
      })
      .take(1)
  }
}

@Injectable()
export class HasContentAccess implements CanActivate {

  constructor(
    private store: Store<any>,
    private uiService: UiService,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.store
      .select('auth')
      .map((res: any) => res.roles.assigned)
      .map((roles: any) => {
        if (roles.includes('admin') || roles.includes('manager')) {
          return true
        }
        this.uiService.toastError('Access Denied', 'Your assigned roles do not allow access.')
        return false
      })
      .take(1)
  }
}

@Injectable()
export class UserLoggedIn implements CanActivate {

  constructor(
    private store: Store<any>,
    private uiService: UiService,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.store
      .select('auth')
      .map((res: any) => res.loggedIn)
      .take(1)
  }
}
