import { useRequest } from 'ahooks'

import { setDenomOnline } from '../utils/http/apis'

interface Props {
  onSuccess?: () => void
  onError?: () => void
}

export const useSetDenomOnline = ({ onSuccess, onError }: Props) => {
  const {
    run: runSetDenomOnline,
    data,
    error,
    loading
  } = useRequest((no: string) => setDenomOnline(no), {
    manual: true,
    onSuccess,
    onError
  })

  return { runSetDenomOnline, data, error, loading }
}
