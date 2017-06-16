import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Effect, Actions } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';

import * as app from './app.actions'

@Injectable()
export class AppEffects {




  @Effect({ dispatch: false })
  loadModule$ = this.actions$
    .ofType('APP_LOAD_MODULE')
    .do(action => {
      const { moduleConfig } = action.payload

      moduleConfig.topLinks.forEach(payload => this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload }))
      moduleConfig.sidebarLinks.forEach(payload => this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload }))
      moduleConfig.dashboardLinks.forEach(payload => this.store.dispatch({ type: 'APP_CONTENT_DASHBOARD', payload }))
    })


  @Effect({ dispatch: false })
  domainsAdd$ = this.actions$
    .ofType('APP_DOMAIN_ADD')
    .do(action => {
      return { type: 'AUTH_REALMS_ADD', payload: action.payload }
    })

  @Effect({ dispatch: false })
  domainSelect$ = this.actions$
    .ofType('APP_DOMAIN_SELECT')
    .do(action => {
      window.localStorage.setItem('domain', JSON.stringify(action.payload))
      this.store.dispatch({ type: 'APP_RELOAD' })
    })

  @Effect({ dispatch: false })
  removeToken$ = this.actions$
    .ofType('AUTH_REMOVE_TOKEN')
    .do(() => window.localStorage.removeItem('token'))

  @Effect({ dispatch: false })
  redirectDashboard: Observable<Action> = this.actions$
    .ofType(app.ActionTypes.APP_REDIRECT_DASHBOARD)
    .do(() => this.router.navigate(['/', 'dashboard']))

  @Effect({ dispatch: false })
  redirectLogin: Observable<Action> = this.actions$
    .ofType(app.ActionTypes.APP_REDIRECT_LOGIN)
    .do(() => {
      this.store.dispatch({ type: 'AUTH_REMOVE_TOKEN' })
      this.router.navigate(['/', 'login'])
    })

  @Effect({ dispatch: false })
  redirectRouter: Observable<Action> = this.actions$
    .ofType(app.ActionTypes.APP_REDIRECT_ROUTER)
    .do(() => this.router.navigate(['/', 'router']))

  @Effect({ dispatch: false })
  appRefresh$ = this.actions$
    .ofType('APP_RELOAD')
    // FIXME: I miss UI-Routers $state.reload() - find an angular way of doing this
    .do(() => window.location.reload())

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<any>,
  ) { }

}
