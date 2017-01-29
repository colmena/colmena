import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/toArray'

import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { UserApi } from '@lb-sdk'

import * as auth from './actions'

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN)
    .do(action => {
      this.userApi.login(action.payload, 'user', true)
        .subscribe(
          (success) => this.store.dispatch(new auth.AuthLoginSuccessAction(success)),
          (error) => new auth.AuthLoginSuccessAction(error),
        )
    })

  @Effect({ dispatch: false })
  loginError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN_ERROR)
    .do((action) => {
      alert('There was an error logging you in.')
      console.log('AUTH_LOGIN_ERROR', action)
    })

  @Effect({ dispatch: false })
  loginSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN_SUCCESS)
    .do((action) => {
      window.localStorage.setItem('token', JSON.stringify(action))
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private userApi: UserApi,
  ) {
  }

}

