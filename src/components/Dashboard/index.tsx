import { Stack, Typography } from '@mui/material'
import theme, { defaultFullscreenPageStyling, shadows } from '../../theme'
import Navigation from '../Navigation'
import PlantItem from '../PlantItem'
import StoreSelection from '../StoreSelection'

export default function Dashboard() {
  return (
    <Stack sx={{ ...defaultFullscreenPageStyling() }}>
      <Navigation>
        <Stack spacing={2}>
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

          <Stack
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              padding: 2,
              boxShadow: shadows.lightest,
            }}
            spacing={2}
          >
            <Typography variant='h3' component='h2'>
              Plants
            </Typography>
            <PlantItem />
          </Stack>
        </Stack>
      </Navigation>
    </Stack>
  )
}
