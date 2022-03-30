import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useRequest, useSessionStorageState } from 'ahooks'
import { message } from 'antd'
import { AxiosResponse } from 'axios'

import {
  CommonResponse,
  UserLoginRequestBody,
  UserLoginResponse
} from '../../shared/types'
import { userLogin } from '../../utils/http/apis'

const Login = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [, setToken] = useSessionStorageState('token')

  const { run } = useRequest((data: UserLoginRequestBody) => userLogin(data), {
    manual: true,
    onSuccess: (res: AxiosResponse<CommonResponse<UserLoginResponse>>) => {
      message.success('Login success')
      navigate('/', { replace: true })
      setToken(res.data.data.token)
    },
    onError: () => {
      message.error('Email or password is incorrect!')
      navigate('/forbidden', { replace: true })
      setToken()
    }
  })

  useEffect(() => {
    if (searchParams.get('email') && searchParams.get('password')) {
      run({
        email: searchParams.get('email') as string,
        password: searchParams.get('password') as string
      })
    }
  }, [navigate, run, searchParams])

  return null
}

export default Login
