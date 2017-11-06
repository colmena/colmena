import { get } from 'lodash'
import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { UiService } from '@colmena/admin-ui'
import { SystemUserApi } from '@colmena/admin-lb-sdk'

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
    .do((action) => this.ui.alerts.notifyError({
      title: get(action, 'payload.name'),
      body: get(action, 'payload.message'),
    })
    )

  @Effect({ dispatch: false })
  loginSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN_SUCCESS)
    .do((action) => {
      window.localStorage.setItem('token', JSON.stringify(action.payload))
      this.ui.alerts.notifySuccess({
        title: 'Sign In Successful',
        body: `You are logged in as ${get(action, 'payload.user.email')}`,
      })
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
      this.ui.alerts.notifySuccess({
        title: 'Successfully registered',
        body: `${action.payload.email} has been created`,
      })
      return this.store.dispatch(new auth.AuthLoginAction(action.payload))
    })

  @Effect({ dispatch: false })
  registerError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_REGISTER_ERROR)
    .do((action) => this.ui.alerts.notifyError({
      title: get(action, 'payload.name'),
      body: get(action, 'payload.message'),
    }))

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
      this.ui.alerts.notifyError({
        title: get(action, 'payload.name'),
        body: get(action, 'payload.message'),
      })
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  @Effect({ dispatch: false })
  logoutSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGOUT_SUCCESS)
    .do(() => {
      window.localStorage.removeItem('token')
      this.ui.alerts.notifySuccess({
        title: 'Log Out Successful',
        body: 'You are logged out',
      })
      return this.store.dispatch({ type: 'APP_REDIRECT_ROUTER' })
    })

  @Effect({ dispatch: false })
  getUserInfo$ = this.actions$
    .ofType('AUTH_GET_USER_ROLES')
    .do(action => {
      this.userApi.info(action.payload.userId)
        .subscribe(res => {
          window.localStorage.setItem('roles', JSON.stringify(res.roles))
          this.store.dispatch({ type: 'AUTH_SET_ROLES', payload: res.roles })
        })
    })

  @Effect({ dispatch: false })
  checkToken: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_CHECK_TOKEN)
    .do(() => this.userApi.getCurrent()
      .subscribe(
      (success) => this.store.dispatch(new auth.AuthCheckTokenSuccessAction(success)),
      (error) => this.store.dispatch(new auth.AuthCheckTokenErrorAction(error)),
    )
    )

  @Effect({ dispatch: false })
  checkTokenError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_CHECK_TOKEN_ERROR)
    .do((action) => {
      this.ui.alerts.notifyError({
        title: 'Invalid Token',
        body: 'Redirecting to login screen',
      })
      return this.store.dispatch({ type: 'APP_REDIRECT_LOGIN' })
    })

  @Effect({ dispatch: false })
  checkTokenSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_CHECK_TOKEN_SUCCESS)
    .do(() => {
      this.ui.alerts.notifySuccess({
        title: 'Valid Token',
        body: 'It all looks good :)',
      })
      return true
    })


  @Effect({ dispatch: false })
  setPassword: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_SET_PASSWORD)
    .do(action => {
      if (action.payload.password !== action.payload.verify) {
        this.ui.alerts.notifyError({
          title: 'Invalid Password',
          body: 'Passwords don\'t match',
        })
      } else {
        this.userApi.setPassword(action.payload.password)
          .subscribe(
          (success) => this.store.dispatch(new auth.AuthSetPasswordSuccessAction(success)),
          (error) => this.store.dispatch(new auth.AuthSetPasswordErrorAction(error)),
        )
      }
    })

  @Effect({ dispatch: false })
  setPasswordSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_SET_PASSWORD_SUCCESS)
    .do((action) => {
      this.ui.alerts.notifySuccess({
        title: 'Reset Password Success',
        body: 'You can login using the new password now :)',
      })
      return this.store.dispatch({ type: 'APP_REDIRECT_LOGIN' })
    })

  @Effect({ dispatch: false })
  setPasswordError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_SET_PASSWORD_ERROR)
    .do((action) => this.ui.alerts.notifyError({
      title: get(action, 'payload.name'),
      body: get(action, 'payload.message'),
    })
    )

  @Effect({ dispatch: false })
  recover: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_RECOVER)
    .do(action => this.userApi.resetPassword(action.payload)
      .subscribe(
      (success) => this.store.dispatch(new auth.AuthRecoverSuccessAction({ email: action.payload.email })),
      (error) => this.store.dispatch(new auth.AuthRecoverErrorAction(error))
      )
    )

  @Effect({ dispatch: false })
  recoverSuccess: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_RECOVER_SUCCESS)
    .do((action) => this.ui.alerts.notifySuccess({
      title: 'Check your email',
      body: `We've sent an email to ${get(action, 'payload.email')}. Click the link in the email to reset your password. :)`,
    })
    )

  @Effect({ dispatch: false })
  recoverError: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_RECOVER_ERROR)
    .do((action) => this.ui.alerts.notifyError({
      title: get(action, 'payload.name'),
      body: get(action, 'payload.message'),
    })
    )


  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private userApi: SystemUserApi,
    private ui: UiService,
  ) {
  }

}
