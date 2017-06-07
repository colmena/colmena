import { get } from 'lodash'
import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { UiService } from '@colmena/admin-ui'
import { UserApi } from '@colmena/admin-lb-sdk'

import * as auth from './auth.actions'

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN)
    .do(action => {
      this.userApi.login(action.payload, 'user', true)
        .subscribe(
          (success) => {
            this.store.dispatch({ type: 'AUTH_GET_USER_ROLES', payload: success })
            this.store.dispatch(new auth.AuthLoginSuccessAction(success))
          },
          (error) => this.store.dispatch(new auth.AuthLoginErrorAction(error)),
        )
    })

  @Effect({ dispatch: false })
  loginError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN_ERROR)
    .do((action) => this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message')))

  @Effect({ dispatch: false })
  loginSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN_SUCCESS)
    .do((action) => {
      window.localStorage.setItem('token', JSON.stringify(action.payload))
      this.ui.toastSuccess('Sign In Successful', `You are logged in as ${get(action, 'payload.user.email')}`)
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  @Effect({ dispatch: false })
  register: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_REGISTER)
    .do((action: any) => {
      this.userApi.create(action.payload)
        .subscribe(
          (success: any) => this.store.dispatch(new auth.AuthRegisterSuccessAction({
            realm: action.payload.realm,
            email: action.payload.email,
            password: action.payload.password,
          })),
          (error) => this.store.dispatch(new auth.AuthRegisterErrorAction(error)),
        )
    })

  @Effect({ dispatch: false })
  registerSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_REGISTER_SUCCESS)
    .do((action: any) => {
      this.ui.toastSuccess('Successfully registered', `${action.payload.email} has been created`)
      return this.store.dispatch(new auth.AuthLoginAction(action.payload))
    })

  @Effect({ dispatch: false })
  registerError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_REGISTER_ERROR)
    .do((action) => this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message')))


  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGOUT)
    .do(() => {
      window.localStorage.removeItem('token')
      this.userApi.logout()
        .subscribe(
          (success) => this.store.dispatch(new auth.AuthLogoutSuccessAction(success)),
          (error) => this.store.dispatch(new auth.AuthLogoutErrorAction(error)),
        )
    })

  @Effect({ dispatch: false })
  logoutError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGOUT_ERROR)
    .do((action) => {
      window.localStorage.removeItem('token')
      this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message'))
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  @Effect({ dispatch: false })
  logoutSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGOUT_SUCCESS)
    .do(() => {
      window.localStorage.removeItem('token')
      this.ui.toastSuccess('Log Out Successful', 'You are logged out')
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  @Effect({ dispatch: false })
  getUserInfo$ = this.actions$
    .ofType('AUTH_GET_USER_ROLES')
    .do(action => {
      console.log('AUTH_GET_USER_ROLES', action.payload)
      this.userApi.info(action.payload.userId)
        .subscribe(res => {
          console.log('set roles')
          window.localStorage.setItem('roles', JSON.stringify(res.roles))
          this.store.dispatch({ type: 'AUTH_SET_ROLES', payload: res.roles })
        })
    })

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private userApi: UserApi,
    private ui: UiService,
  ) {
  }

}
