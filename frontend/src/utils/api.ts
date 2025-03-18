import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.error || 'An error occurred'
    return Promise.reject(new Error(errorMessage))
  }
)

export interface Plant {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface UserCredentials {
  email: string
  password: string
}

export async function getToken(
  credentials: UserCredentials
): Promise<{ access_token: string }> {
  const response = await apiClient.post('/token', credentials)
  return response.data
}

export async function getPlants(): Promise<Plant[]> {
  const response = await apiClient.get('/plant')
  return response.data
}

export function logout(setToken: (token: string | null) => void) {
  localStorage.removeItem('token')
  setToken(null)
}
