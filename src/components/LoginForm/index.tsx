import { TextField, Button, Stack } from '@mui/material'
import { convertPxToRem } from '../../utils'

export default function LoginForm() {
  return (
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
  )
}
