import { Action } from '@ngrx/store'

export const ActionTypes = {
  APP_DOMAIN_ADD: 'APP_DOMAIN_ADD',
  APP_SETTING_ADD: 'APP_SETTING_ADD',
  APP_REDIRECT_DASHBOARD: 'APP_REDIRECT_DASHBOARD',
  APP_REDIRECT_LOGIN: 'APP_REDIRECT_LOGIN',
  APP_REDIRECT_ROUTER: 'APP_REDIRECT_ROUTER',
}

export class AppAddDomainAction implements Action {
  type = ActionTypes.APP_DOMAIN_ADD
  constructor(public payload: any) {}
}

export class AppAddSettingAction implements Action {
  type = ActionTypes.APP_SETTING_ADD
  constructor(public payload: any) {}
}

export class AppRedirectDashboardAction implements Action {
  type = ActionTypes.APP_REDIRECT_DASHBOARD
  constructor(public payload: any) {}
}

export class AppRedirectLoginAction implements Action {
  type = ActionTypes.APP_REDIRECT_LOGIN
  constructor(public payload: any) {}
}

export class AppRedirectRouterAction implements Action {
  type = ActionTypes.APP_REDIRECT_ROUTER
  constructor(public payload: any) {}
}

export type Actions =
  | AppAddDomainAction
  | AppAddSettingAction
  | AppRedirectDashboardAction
  | AppRedirectLoginAction
  | AppRedirectRouterAction
