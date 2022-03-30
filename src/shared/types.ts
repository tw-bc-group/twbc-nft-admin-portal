export interface CommonResponse<T> {
  code: number
  data: T
  message: string
}

export interface UserLoginRequestBody {
  email: string
  password: string
}

export interface UserLoginResponse {
  id: number
  email: string
  token: string
}
