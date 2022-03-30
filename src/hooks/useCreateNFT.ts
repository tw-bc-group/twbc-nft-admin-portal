import { useRequest } from 'ahooks'
import { createNTFRequestBody } from '../shared/types';
import { createNFT } from '../utils/http/apis';

interface Props { onSuccess?: () => void; onError?: () => void }

export const useCreateNFT = ({ onSuccess, onError }:Props) => {
    const { run: runCreateNFT, data, error, loading } = useRequest(
        (data:createNTFRequestBody) => createNFT(data),
      {
        manual: true,
        onSuccess,
        onError,
        
      },
    )
  
    return { runCreateNFT, data, error, loading} 
  }
  