import { Stack, Divider } from '@mui/material'
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
          <AddPlantForm />
        </Stack>
      </Navigation>
    </Stack>
  )
}
