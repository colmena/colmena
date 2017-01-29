import { Action, ActionReducer } from '@ngrx/store'

const initialState: any = {
}

export const app: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {

    default:
      return state
  }
}
