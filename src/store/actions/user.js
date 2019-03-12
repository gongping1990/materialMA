import { UPDATE_USERINFO, UPDATE_SHAREINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, (paylod) => {
  console.log(paylod)
  return paylod
})

export const updateShareInfo = createAction(UPDATE_SHAREINFO, (paylod) => {
  console.log(paylod)
  return paylod
})
