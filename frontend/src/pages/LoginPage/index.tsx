import { Stack } from '@mui/material'
import LoginForm from '../../components/LoginForm'
import theme, { defaultFullscreenPageStyling } from '../../theme'
import Logo from '../../components/Logo'
import { convertPxToRem } from '../../utils'

export default function LoginPage() {
  return (
    <Stack
      sx={{ ...defaultFullscreenPageStyling(theme.palette.secondary.light) }}
    >
      <Stack
        justifyContent='center'
        spacing={5}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          p: 3,
          maxWidth: convertPxToRem(450),
          width: '100%',
          margin: 'auto',
        }}
      >
        <Stack alignItems='center' sx={{ width: '100%' }}>
          <Logo size='large' />
        </Stack>
        <LoginForm />
      </Stack>
    </Stack>
  )
}
