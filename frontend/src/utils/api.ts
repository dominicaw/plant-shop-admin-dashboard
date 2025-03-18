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

async function authenticatedFetch(
  url: string,
  token: string | null,
  options: RequestInit = {}
) {
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to fetch')
  }

  return response.json()
}

export async function getToken(
  credentials: UserCredentials
): Promise<{ access_token: string }> {
  const response = await fetch('/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to fetch token')
  }

  return response.json()
}

export async function getPlants(token: string | null): Promise<Plant[]> {
  return authenticatedFetch('/api/plant', token, {
    method: 'GET',
  })
}

export function logout(setToken: (token: string | null) => void) {
  localStorage.removeItem('token')
  setToken(null)
}
