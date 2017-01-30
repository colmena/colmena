import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
  currentUser: null,
  loggedIn: false,
  realms: [],
}

export const auth: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'AUTH_LOGIN_TOKEN':
      console.log('AUTH_LOGIN_TOKEN', action.payload)
      return Object.assign({}, state)

    case 'AUTH_LOGIN':
      console.log('AUTH_LOGIN', action.payload)
      return Object.assign({}, state)

    case 'AUTH_LOGIN_SUCCESS':
      console.log('AUTH_LOGIN_SUCCESS', action.payload)
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true })

    case 'AUTH_LOGOUT_SUCCESS':
      console.log('AUTH_LOGOUT_SUCCESS', action.payload)
      return Object.assign({}, state, { currentUser: null, loggedIn: false })

    case 'AUTH_REALMS_ADD':
      console.log('AUTH_REALMS_ADD', action.payload)
      return Object.assign({}, state, { realms: [ ...state.realms, action.payload ] })

    default:
      return state
  }
}
