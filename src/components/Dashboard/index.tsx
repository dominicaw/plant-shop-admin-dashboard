import { Stack, Typography } from '@mui/material'
import Navigation from '../Navigation'
import { defaultFullscreenPageStyling } from '../../theme'

export default function Dashboard() {
  return (
    <Stack sx={{ ...defaultFullscreenPageStyling() }}>
      <Navigation>
        <Typography variant='h2'>Dashboard</Typography>
        <Typography variant='body1'>Welcome to the dashboard</Typography>
      </Navigation>
    </Stack>
  )
}
