import axios from 'axios'
import { getSession } from 'next-auth/react'

const API_CONFIG = {
  baseURL: 'http://localhost:5000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(API_CONFIG)

api.interceptors.request.use(async (config) => {
  const session = await getSession()
  if (session?.user?.accessToken) {
    config.headers.Authorization = `Bearer ${session.user.accessToken}`
  }
  return config
})
