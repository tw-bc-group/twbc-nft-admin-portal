import { RcFile } from 'antd/lib/upload'

import { httpInstance, publicInstance, useFetchData } from './index'
import { NFTItem } from '../../routes/List'
import { DetailType } from '../../routes/Detail'
import { createNTFRequestBody, UserLoginRequestBody } from '../../shared/types'

export const useNFTDetail = (id: string | undefined) => {
  return useFetchData<DetailType>(`/nft/${id}`)
}

export const useNFTList = () => {
  const { data, error } = useFetchData<NFTItem[]>('/nft')
  return { data, loading: !data && !error }
}

export const uploadNFTFile = (
  data: string | Blob | RcFile
): Promise<string> => {
  return httpInstance.post(`/file/upload`, data)
}

export const createNFT = (data: createNTFRequestBody): Promise<string> =>
  httpInstance.post(`/ntf`, data)

export const userLogin = (data: UserLoginRequestBody) =>
  publicInstance.post(`/login`, data)

export const getPresignedUrl = (contentType: string) =>
  httpInstance.get(
    `/file/presigned-url?contentType=${encodeURIComponent(contentType)}`
  )
