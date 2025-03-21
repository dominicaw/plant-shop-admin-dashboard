import { useEffect, useState } from 'react'
import { TextField, Button, Stack, Typography } from '@mui/material'
import { convertPxToRem, validateEmail, validatePassword } from '../../utils'
import { getToken } from '../../utils/api'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isLoginButtonEnabled, setIsLoginButtonEnabled] =
    useState<boolean>(false)
  const { setToken } = useAuth()
  const navigate = useNavigate()

  function updateLoginButtonDisabledState() {
    setIsLoginButtonEnabled(
      Boolean(validateEmail(email) && validatePassword(password))
    )
    setError(null)
  }

  useEffect(() => {
    updateLoginButtonDisabledState()
  }, [email, password])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    try {
      const tokenData = await getToken({ email, password })
      setToken(tokenData.access_token)
      setPassword('')
      navigate('/dashboard')
    } catch (error) {
      setError((error as Error).message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          maxWidth: convertPxToRem(350),
          width: '100%',
        }}
      >
        <TextField
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          margin='normal'
          size='small'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
          size='small'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color='error'>{error}</Typography>}
        <Button
          variant='contained'
          color='accent1'
          fullWidth
          type='submit'
          size='medium'
          disabled={!isLoginButtonEnabled}
          disableElevation
          disableTouchRipple
        >
          Login
        </Button>
      </Stack>
    </form>
  )
}
