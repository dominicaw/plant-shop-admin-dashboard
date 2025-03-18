import { Stack, Typography } from '@mui/material'
import StoreSelection from '../StoreSelection'
import { useAuth } from '../../context/AuthContext'
import { Role } from '../../utils/api'

export default function DashboardHeader() {
  const { roles } = useAuth()

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
      {roles.includes(Role.OWNER) && <StoreSelection />}
    </Stack>
  )
}
