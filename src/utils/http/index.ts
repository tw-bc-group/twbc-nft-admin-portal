import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import useSWR from 'swr'

const BASE_URL = '/api'

export const externalInstance = axios.create({
  timeout: 30000
})

export const httpInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    authorization: 'Bearer 2'
  }
})

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    authorization: 'Bearer 2'
  }
})

export const authInterceptor = (clients: Array<AxiosInstance>) => {
  clients.forEach((item) => {
    item.interceptors.request.use(
      async (config) => {
        const token = sessionStorage.getItem('token')
        if (token) {
          try {
            config.headers!['Authorization'] = 'Bearer ' + JSON.parse(token)
          } catch (e) {
            console.log(e)
          }
        }
        return config
      },
      (error) => Promise.reject(error.response?.data)
    )
  })
}

export const errorInterceptor = (clients: Array<AxiosInstance>) => {
  clients.forEach((item) => {
    item.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          return window.location.replace('/login')
        }
        return Promise.reject(error.response?.data)
      }
    )
  })
}

const initHttpInterceptors = () => {
  authInterceptor([httpInstance])
  errorInterceptor([httpInstance])
}

initHttpInterceptors()

export const fetcher = (url: string) => {
  return httpInstance.get(url).then((res) => res.data)
}

export const useFetchData = <T>(key: string | null) => {
  const { data, error, mutate } = useSWR<T>(key)
  return { data, error, loading: !data && !error, mutate }
}
