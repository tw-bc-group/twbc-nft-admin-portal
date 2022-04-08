import { useRequest } from 'ahooks'

import { createNFTinDenomRequestBody } from '../shared/types'
import { createNFTsListInDenom } from '../utils/http/apis'

interface Props {
  onSuccess?: () => void
  onError?: () => void
}

export const useCreateNFTinDenom = ({ onSuccess, onError }: Props) => {
  const {
    run: runCreateNFTinDenom,
    data,
    error,
    loading
  } = useRequest(
    (denomId: string | undefined, data: createNFTinDenomRequestBody) =>
      createNFTsListInDenom(denomId, data),
    {
      manual: true,
      onSuccess,
      onError
    }
  )

  return { runCreateNFTinDenom, data, error, loading }
}
