export async function getToken(credentials: {
  email: string
  password: string
}) {
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

export function logout(setToken: (token: string | null) => void) {
  localStorage.removeItem('token')
  setToken(null)
}
