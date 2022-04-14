import { useRequest } from 'ahooks'

import { mintNFTRequestBody } from '../shared/types'
import { mintNFT } from '../utils/http/apis'

interface Props {
  onSuccess?: () => void
  onError?: () => void
  denomId: string
  nftId: string
}

export const useMintNFT = ({ onSuccess, onError, denomId, nftId }: Props) => {
  const {
    run: runMintNFT,
    data,
    error,
    loading
  } = useRequest((data: mintNFTRequestBody) => mintNFT(data, denomId, nftId), {
    manual: true,
    onSuccess,
    onError
  })

  return { runMintNFT, data, error, loading }
}
