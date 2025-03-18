import { Divider, Stack } from '@mui/material'
import { PlantList } from '../../components/PlantList'
import { defaultFullscreenPageStyling } from '../../theme'
import DashboardHeader from '../../components/DashboardHeader'
import Navigation from '../../components/Navigation'

export default function DashboardPage() {
  return (
    <Stack sx={{ ...defaultFullscreenPageStyling() }}>
      <Navigation>
        <DashboardHeader />
        <Stack spacing={2}>
          <Divider />
          <PlantList />
        </Stack>
      </Navigation>
    </Stack>
  )
}
