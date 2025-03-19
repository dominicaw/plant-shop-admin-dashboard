import axios from 'axios'

export interface Plant {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface UserCredentials {
  email: string
  password: string
}

export enum Role {
  OWNER = 'owner',
  MANAGER = 'manager',
  ASSISTANT = 'assistant',
}

export enum Stores {
  KLOOF_STREET = 'kloofSteet',
  MITCHELLS_PLAIN = 'mitchellsPlain',
  SOMERSET_WEST = 'somersetWest',
}

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

export async function addPlant(
  plant: Omit<Plant, 'id' | 'image'>
): Promise<Plant> {
  const response = await apiClient.post('/plant', plant)
  return response.data
}

export async function updatePlant(
  id: string,
  plant: Partial<Plant>
): Promise<Plant> {
  const response = await apiClient.put(`/plant/${id}`, plant)
  return response.data
}
