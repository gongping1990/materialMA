import { handleActions } from 'redux-actions'
import { UPDATE_USERINFO, UPDATE_SHAREINFO,UPDATE_SHARE_FRIEND_INFO } from '../types/user'

export default handleActions({
  [UPDATE_USERINFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  },
  [UPDATE_SHAREINFO] (state, action) {
    return {
      ...state,
      shareInfo: action.payload
    }
  },
  [UPDATE_SHARE_FRIEND_INFO] (state, action) {
    return {
      ...state,
      shareFirendInfo: action.payload
    }
  }
}, {
  userInfo: {},
  shareInfo: {},
  shareFirendInfo: {}
})
