import { TextField, Button, Stack } from '@mui/material'
import { defaultFullscreenPageStyling } from '../../theme'
import Logo from '../Logo'
import { convertPxToRem } from '../../utils'

export default function Login() {
  return (
    <Stack spacing={5} sx={{ ...defaultFullscreenPageStyling }}>
      <Stack alignItems='center'>
        <Logo size='large' />
      </Stack>

      <form
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
            disableElevation
            disableTouchRipple
          >
            Login
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}
