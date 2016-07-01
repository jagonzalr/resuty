
import { combineReducers } from 'redux';

export function oauth2(state = {

}, action) {
  switch(action.type) {
    case 'REQUEST_OAUTH2':
      return state
    case 'RECEIVE_OAUTH2':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  oauth2
})

export default rootReducer