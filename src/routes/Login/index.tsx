import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useCookieState, useRequest } from 'ahooks'
import { message } from 'antd'
import { UserLoginRequestBody } from '../../shared/types'
import { userLogin } from '../../utils/http/user'

const Login = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [token] = useCookieState('token')

  const { run } = useRequest(
    (data: UserLoginRequestBody) => userLogin(data),
    {
      manual: true,
      onSuccess: () => {
        message.success('Login success')
        navigate('/', { replace: true })
      },
      onError: () => {
        message.error('Email or password is incorrect!')
        navigate('/forbidden', { replace: true })
      }
    }
  )

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true })
    } else if(searchParams.get('email') && searchParams.get('password')){
      run({
        email: searchParams.get('email') as string,
        password: searchParams.get('password') as string
      })
    }
  }, [navigate, run, searchParams, token])

  return null
}

export default Login
