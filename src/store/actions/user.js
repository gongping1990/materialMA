import { UPDATE_USERINFO, UPDATE_SHAREINFO, UPDATE_SHARE_FRIEND_INFO } from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, (paylod) => {
  return paylod
})

export const updateShareInfo = createAction(UPDATE_SHAREINFO, (paylod) => {
  return paylod
})

export const updateShareFirendInfo = createAction(UPDATE_SHARE_FRIEND_INFO, (paylod) => {
  return paylod
})
