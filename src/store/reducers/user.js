import { handleActions } from 'redux-actions'
import { UPDATE_USERINFO } from '../types/user'

export default handleActions({
  [UPDATE_USERINFO] (state, action) {
    console.log(action)
    console.log({
      ...state,
      userInfo: action.payload
    })
    return {
      ...state,
      userInfo: action.payload
    }
  }
}, {
  userInfo: {}
})
