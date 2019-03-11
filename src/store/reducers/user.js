import { handleActions } from 'redux-actions'
import { UPDATE_USERINFO } from '../types/user'

export default handleActions({
  [UPDATE_USERINFO] (state, action) {
    let info = {
      ...state,
      userInfo: action.playload
    }
    console.log(action)
    console.log(info)
    return info
  }
}, {
  userInfo: {}
})
