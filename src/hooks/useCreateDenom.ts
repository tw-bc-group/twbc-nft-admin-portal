import { useRequest } from 'ahooks'

import { createDenomRequestBody } from '../shared/types'
import { createDenom } from '../utils/http/apis'

interface Props {
  onSuccess?: () => void
  onError?: () => void
}

export const useCreateDenom = ({ onSuccess, onError }: Props) => {
  const {
    run: runCreateDenom,
    data,
    error,
    loading
  } = useRequest((data: createDenomRequestBody) => createDenom(data), {
    manual: true,
    onSuccess,
    onError
  })

  return { runCreateDenom, data, error, loading }
}
