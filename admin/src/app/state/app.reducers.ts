import { sortBy } from 'lodash'
import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
  domains: [],
  settings: {},
  contentDashboard: [],
  systemDashboard: [],
}

export const app: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'APP_ADD_DOMAIN':
      return Object.assign({}, state, { domains: [ ...state.domains, action.payload] })

    case 'APP_ADD_SETTING':
      const settings = state.settings
      settings[action.payload.key] = action.payload.value

      return Object.assign({}, state, { settings })

    case 'APP_CONTENT_DASHBOARD':
      return Object.assign({}, state, {
        contentDashboard: sortBy([ ...state.contentDashboard, action.payload ], ['weight'])
      })

    case 'APP_SYSTEM_DASHBOARD':
      return Object.assign({}, state, {
        systemDashboard: sortBy([ ...state.systemDashboard, action.payload ], ['weight'])
      })

    default:
      return state
  }
}
