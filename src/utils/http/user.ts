import { publicInstance } from './index'
import { UserLoginRequestBody } from '../../shared/types'

export const userLogin = (data: UserLoginRequestBody) =>
  publicInstance.post(`/login`, data)
