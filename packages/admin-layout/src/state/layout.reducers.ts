import { VERSION } from '@angular/core'

import { sortBy } from 'lodash'
import { Action, ActionReducer } from '@ngrx/store'

export interface State {
  headerNav: any[];
  footerLeft: string;
  footerRight: string;
  sidebarNav: any[];
}

const initialState: State = {
  headerNav: [],
  footerLeft: 'Colmena CMS',
  footerRight: `Angular ${VERSION.full}`,
  sidebarNav: [],
}

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case 'LAYOUT_HEADER_NAV':
      return Object.assign({}, state, { headerNav: sortBy([...state.headerNav, action.payload], ['weight']) })

    case 'LAYOUT_FOOTER_LEFT':
      return Object.assign({}, state, { footerLeft: action.payload })

    case 'LAYOUT_FOOTER_RIGHT':
      return Object.assign({}, state, { footerRight: action.payload })

    case 'LAYOUT_SIDEBAR_NAV':
      return Object.assign({}, state, { sidebarNav: sortBy([...state.sidebarNav, action.payload], ['weight']) })

    default:
      return state
  }
}
