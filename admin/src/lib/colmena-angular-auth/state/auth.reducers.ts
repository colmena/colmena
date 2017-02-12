import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
  currentUser: null,
  loggedIn: false,
  realms: [],
  roles: {
    assigned: [],
    unassigned: [],
  },
}

export const auth: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    case 'AUTH_LOGIN':
      return Object.assign({}, state)

    case 'AUTH_LOGOUT_SUCCESS':
      return Object.assign({}, state, { currentUser: null, loggedIn: false })

    case 'AUTH_SET_TOKEN':
    case 'AUTH_LOGIN_SUCCESS':
      console.log('action.payload', action.payload)
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true })

    case 'AUTH_REALMS_ADD':
      return Object.assign({}, state, { realms: [ ...state.realms, action.payload ] })

    case 'AUTH_SET_ROLES':
      return Object.assign({}, state, {
        roles: {
          assigned: [...state.roles.assigned, ...action.payload.assigned ],
          unassigned: [...state.roles.unassigned, ...action.payload.unassigned ],
        },
      })

    default:
      return state
  }
}
