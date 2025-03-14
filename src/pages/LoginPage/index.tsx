import { Stack } from '@mui/material'
import LoginForm from '../../components/LoginForm'
import { defaultFullscreenPageStyling } from '../../theme'
import Logo from '../../components/Logo'

export default function LoginPage() {
  return (
    <Stack spacing={5} sx={{ ...defaultFullscreenPageStyling }}>
      <Stack alignItems='center'>
        <Logo size='large' />
      </Stack>
      <LoginForm />
    </Stack>
  )
}
