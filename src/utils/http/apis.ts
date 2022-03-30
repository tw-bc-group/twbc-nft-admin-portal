import { httpInstance, publicInstance, useFetchData } from './index'
import { NFTItem } from '../../routes/List'
import { DetailType } from '../../routes/Detail'
import { createNTFRequestBody, UserLoginRequestBody } from '../../shared/types'
import { RcFile } from 'antd/lib/upload'

export const useNFTDetail = (id: string | undefined) => {
  return useFetchData<DetailType>(`/nft/${id}`)
}

export const useNFTList = () => {
  return useFetchData<NFTItem[]>('/nft')
}

export const uploadNFTFile = (data: string | Blob | RcFile): Promise<string> => {
  return httpInstance.post(`/file/upload`, data);
};

 export const createNFT = (data:createNTFRequestBody):Promise<string> => httpInstance.post(`/ntf`, data)

export const userLogin = (data: UserLoginRequestBody) =>
  publicInstance.post(`/login`, data)

