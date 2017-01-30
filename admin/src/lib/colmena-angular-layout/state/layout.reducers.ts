import { VERSION } from '@angular/core'

import { sortBy } from 'lodash'
import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
  headerNav: [],
  footerLeft: 'Colmena CMS',
  footerRight: `angular@${VERSION.full}`,
  sidebarNav: [],
}

export const layout: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'LAYOUT_HEADER_NAV':
      return Object.assign({}, state, { headerNav: sortBy([ ...state.headerNav, action.payload ], ['weight']) })

    case 'LAYOUT_FOOTER_LEFT':
      return Object.assign({}, state, { footerLeft: action.payload })

    case 'LAYOUT_FOOTER_RIGHT':
      return Object.assign({}, state, { footerRight: action.payload })

    case 'LAYOUT_SIDEBAR_NAV':
      return Object.assign({}, state, { sidebarNav: sortBy([ ...state.sidebarNav, action.payload ], ['weight']) })

    default:
      return state
  }
}
