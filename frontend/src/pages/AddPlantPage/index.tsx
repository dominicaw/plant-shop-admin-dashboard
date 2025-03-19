import { Stack, Divider, Typography } from '@mui/material'
import DashboardHeader from '../../components/DashboardHeader'
import { defaultFullscreenPageStyling } from '../../theme'
import AddPlantForm from '../../components/AddPlantForm'
import Navigation from '../../components/Navigation'

export default function AddPlantPage() {
  return (
    <Stack sx={{ ...defaultFullscreenPageStyling() }}>
      <Navigation>
        <Stack spacing={2}>
          <DashboardHeader />
          <Divider />
          <Typography variant='h3' component='h2'>
            Add a plant
          </Typography>
          <AddPlantForm />
        </Stack>
      </Navigation>
    </Stack>
  )
}
