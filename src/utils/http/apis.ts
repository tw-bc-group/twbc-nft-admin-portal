import { publicInstance, useFetchData } from './index'
import { NFTItem } from '../../routes/List'
import { DetailType } from '../../routes/Detail'
import { CommonResponse, UserLoginRequestBody } from '../../shared/types'

export const useNFTDetail = (id: string | undefined) => {
  return useFetchData<CommonResponse<DetailType>>(`/nft/${id}`)
}

export const useNFTList = () => {
  return useFetchData<NFTItem[]>('/nft')
}

export const userLogin = (data: UserLoginRequestBody) =>
  publicInstance.post(`/login`, data)
