import { TextField, Button, Stack } from '@mui/material'
import { defaultFullscreenPageStyling } from '../../theme'
import Logo from '../Logo'

export default function Login() {
  return (
    <Stack spacing={2} sx={{ ...defaultFullscreenPageStyling }}>
      <Logo size='large' />
      <Stack spacing={2}>
        <form>
          <TextField
            label='Email'
            variant='outlined'
            fullWidth
            margin='normal'
            size='small'
          />
          <TextField
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            margin='normal'
            size='small'
          />
          <Button
            variant='contained'
            color='accent1'
            fullWidth
            type='submit'
            size='medium'
            // disableElevation
          >
            Login
          </Button>
        </form>
      </Stack>
    </Stack>
  )
}
