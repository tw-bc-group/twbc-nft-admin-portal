import { RcFile } from 'antd/lib/upload'

import { httpInstance, publicInstance, useFetchData } from './index'
import { NFTItem } from '../../routes/List'
import { DetailType } from '../../routes/Detail'
import {
  createDenomRequestBody,
  createNTFRequestBody,
  UserLoginRequestBody
} from '../../shared/types'
import { DenomItem } from '../../routes/Denoms/List'

export const useNFTDetail = (
  denomId: string | undefined,
  id: string | undefined
) => {
  const { data, error } = useFetchData<DetailType>(`/nft/${denomId}/${id}`)
  return { data, loading: !data && !error }
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
  httpInstance.post(`/nft`, data, {
    headers: {
      'Content-type': 'application/json'
    }
  })

export const createDenom = (data: createDenomRequestBody): Promise<string> =>
  httpInstance.post(`/denoms`, data, {
    headers: {
      'Content-type': 'application/json'
    }
  })

export const setDenomOnline = (no: string): Promise<string> =>
  httpInstance.put(
    `/denoms/${no}`,
    { status: 1 },
    {
      headers: {
        'Content-type': 'application/json'
      }
    }
  )

export const userLogin = (data: UserLoginRequestBody) =>
  publicInstance.post(`/login`, data)

export const getPresignedUrl = (contentType: string) =>
  httpInstance.get(
    `/file/presigned-url?contentType=${encodeURIComponent(contentType)}`
  )

export const useDenomsList = () => {
  const { data, error } = useFetchData<DenomItem[]>(`/denoms`)
  return { data, loading: !data && !error }
}
