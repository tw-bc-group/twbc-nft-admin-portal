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

export interface createNTFRequestBody {
  count: number
  name: string
  imageUrl: string
  denomName: string
}

export interface createDenomRequestBody {
  name: string
  description: string
  issuer: string
  brand: string
  salesTime: string
}

export interface createNFTinDenomRequestBody {
  name: string
  description: string
  issueTotal: number
  url: string
}

export interface mintNFTRequestBody {
  name: string
  email: string
  salesTime: string
}
