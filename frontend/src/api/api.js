import axios from 'axios'

const API_CONFIG = {
  baseURL: 'https://nexusapibackend.vercel.app',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = axios.create(API_CONFIG)

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
//nova branch
