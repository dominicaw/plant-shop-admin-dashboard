import { Stack, Typography } from '@mui/material'
import StoreSelection from '../StoreSelection'

export default function DashboardHeader() {
  return (
    <Stack
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      spacing={{ xs: 2, sm: 0 }}
    >
      <Stack>
        <Typography variant='h2' component='h1'>
          Club Chlorophyll | Kloof Street
        </Typography>
        <Typography variant='body1'>Welcome to the dashboard</Typography>
      </Stack>
      <StoreSelection />
    </Stack>
  )
}
