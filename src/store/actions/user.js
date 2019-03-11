import { UPDATE_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const updateUserInfo = createAction(UPDATE_USERINFO, (paylod) => {
  console.log(paylod)
  return paylod
})
