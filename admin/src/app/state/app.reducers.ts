import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
  domains: [],
  settings: {},
}

export const app: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'APP_ADD_DOMAIN':
      return Object.assign({}, state, { domains: [ ...state.domains, action.payload] })

    case 'APP_ADD_SETTING':
      const settings = state.settings
      settings[action.payload.key] = action.payload.value

      return Object.assign({}, state, { settings })

    default:
      return state
  }
}
