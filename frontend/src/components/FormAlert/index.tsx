import { Stack, Typography } from '@mui/material'
import theme from '../../theme'

interface FormAlertProps {
  message: string
  type: 'error' | 'success'
}

export default function FormAlert({ message, type }: FormAlertProps) {
  return (
    <Stack
      sx={{
        backgroundColor:
          theme.palette[type === 'error' ? 'neutral' : 'accent2'].light,
        borderRadius: 2,
        padding: 1,
        border: `1px solid ${
          theme.palette[type === 'error' ? 'error' : 'accent2'].main
        }`,
      }}
    >
      <Typography color={type === 'error' ? 'error' : 'accent2'}>
        {message}
      </Typography>
    </Stack>
  )
}
