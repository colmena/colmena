import { Action } from '@ngrx/store'

export const ActionTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_LOGOUT_ERROR: 'AUTH_LOGOUT_ERROR',
  AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
  AUTH_PASS_REQUEST: 'AUTH_PASS_REQUEST',
  AUTH_PASS_REQUEST_ERROR: 'AUTH_PASS_REQUEST_ERROR',
  AUTH_PASS_REQUEST_SUCCESS: 'AUTH_PASS_REQUEST_SUCCESS',
  AUTH_PASS_VERIFY: 'AUTH_PASS_VERIFY',
  AUTH_PASS_VERIFY_ERROR: 'AUTH_PASS_VERIFY_ERROR',
  AUTH_PASS_VERIFY_SUCCESS: 'AUTH_PASS_VERIFY_SUCCESS',
  AUTH_REGISTER: 'AUTH_REGISTER',
  AUTH_REGISTER_ERROR: 'AUTH_REGISTER_ERROR',
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',
  AUTH_CHECK_TOKEN: 'AUTH_CHECK_TOKEN',
  AUTH_CHECK_TOKEN_ERROR: 'AUTH_CHECK_TOKEN_ERROR',
  AUTH_CHECK_TOKEN_SUCCESS: 'AUTH_CHECK_TOKEN_SUCCESS',
}

type credentials = {
  realm: string
  email: string
  password: string
}

/** LOGIN **/
export class AuthLoginAction implements Action {
  type = ActionTypes.AUTH_LOGIN
  constructor(public payload: credentials) {}
}
export class AuthLoginErrorAction implements Action {
  type = ActionTypes.AUTH_LOGIN_ERROR
  constructor(public payload: any) {}
}
export class AuthLoginSuccessAction implements Action {
  type = ActionTypes.AUTH_LOGIN_SUCCESS
  constructor(public payload: any) {}
}

/** LOGOUT **/
export class AuthLogoutAction implements Action {
  type = ActionTypes.AUTH_LOGOUT
  constructor(public payload: any = {}) {}
}
export class AuthLogoutErrorAction implements Action {
  type = ActionTypes.AUTH_LOGOUT_ERROR
  constructor(public payload: any = {}) {}
}
export class AuthLogoutSuccessAction implements Action {
  type = ActionTypes.AUTH_LOGOUT_SUCCESS
  constructor(public payload: any = {}) {}
}

/** PASS_REQUEST **/
export class AuthPassRequestAction implements Action {
  type = ActionTypes.AUTH_PASS_REQUEST
  constructor(public payload: any) {}
}
export class AuthPassRequestErrorAction implements Action {
  type = ActionTypes.AUTH_PASS_REQUEST_ERROR
  constructor(public payload: any) {}
}
export class AuthPassRequestSuccessAction implements Action {
  type = ActionTypes.AUTH_PASS_REQUEST_SUCCESS
  constructor(public payload: any) {}
}

/** PASS_VERIFY **/
export class AuthPassVerifyAction implements Action {
  type = ActionTypes.AUTH_PASS_VERIFY
  constructor(public payload: any) {}
}
export class AuthPassVerifyErrorAction implements Action {
  type = ActionTypes.AUTH_PASS_VERIFY_ERROR
  constructor(public payload: any) {}
}
export class AuthPassVerifySuccessAction implements Action {
  type = ActionTypes.AUTH_PASS_VERIFY_SUCCESS
  constructor(public payload: any) {}
}

/** REGISTER **/
export class AuthRegisterAction implements Action {
  type = ActionTypes.AUTH_REGISTER
  constructor(public payload: any) {}
}
export class AuthRegisterErrorAction implements Action {
  type = ActionTypes.AUTH_REGISTER_ERROR
  constructor(public payload: any) {}
}
export class AuthRegisterSuccessAction implements Action {
  type = ActionTypes.AUTH_REGISTER_SUCCESS
  constructor(public payload: any) {}
}

/** AUTH_CHECK_TOKEN **/
export class AuthCheckTokenAction implements Action {
  type = ActionTypes.AUTH_CHECK_TOKEN
  constructor(public payload: any) {}
}
export class AuthCheckTokenErrorAction implements Action {
  type = ActionTypes.AUTH_CHECK_TOKEN_ERROR
  constructor(public payload: any) {}
}
export class AuthCheckTokenSuccessAction implements Action {
  type = ActionTypes.AUTH_CHECK_TOKEN_SUCCESS
  constructor(public payload: any) {}
}

export type Actions =
  | AuthLoginAction
  | AuthLoginErrorAction
  | AuthLoginSuccessAction
  | AuthLogoutAction
  | AuthLogoutErrorAction
  | AuthLogoutSuccessAction
  | AuthPassRequestAction
  | AuthPassRequestErrorAction
  | AuthPassRequestSuccessAction
  | AuthPassVerifyAction
  | AuthPassVerifyErrorAction
  | AuthPassVerifySuccessAction
  | AuthRegisterAction
  | AuthRegisterErrorAction
  | AuthRegisterSuccessAction
  | AuthCheckTokenAction
  | AuthCheckTokenErrorAction
  | AuthCheckTokenSuccessAction
