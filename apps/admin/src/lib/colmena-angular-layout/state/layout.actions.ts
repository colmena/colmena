import { Action } from '@ngrx/store'

export const ActionTypes = {
  LAYOUT_HEADER_NAV:      'LAYOUT_HEADER_NAV',
  LAYOUT_FOOTER_LEFT:     'LAYOUT_FOOTER_LEFT',
  LAYOUT_FOOTER_RIGHT:    'LAYOUT_FOOTER_RIGHT',
  LAYOUT_SIDEBAR_NAV:     'LAYOUT_SIDEBAR_NAV',
}

export class LayoutHeaderNavAction implements Action {
  type = ActionTypes.LAYOUT_HEADER_NAV
  constructor(public payload: any) { }
}

export class LayoutFooterLeftAction implements Action {
  type = ActionTypes.LAYOUT_FOOTER_LEFT
  constructor(public payload: any) { }
}

export class LayoutFooterRightAction implements Action {
  type = ActionTypes.LAYOUT_FOOTER_RIGHT
  constructor(public payload: any) { }
}

export class LayoutSidebarNavAction implements Action {
  type = ActionTypes.LAYOUT_SIDEBAR_NAV
  constructor(public payload: any) { }
}

export type Actions
  = LayoutHeaderNavAction
  | LayoutFooterLeftAction
  | LayoutFooterRightAction
  | LayoutSidebarNavAction
