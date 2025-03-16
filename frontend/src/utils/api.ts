export async function getToken(credentials: {
  username: string
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
    throw new Error('Failed to fetch token')
  }

  return response.json()
}
