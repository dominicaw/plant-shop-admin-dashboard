import { Stack, Typography } from '@mui/material'
import theme, { defaultFullscreenPageStyling, shadows } from '../../theme'
import Navigation from '../Navigation'
import StoreSelection from '../StoreSelection'

export default function Dashboard() {
  return (
    <Stack sx={{ ...defaultFullscreenPageStyling() }}>
      <Navigation>
        <Stack spacing={2}>
          <Stack
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent='space-between'
          >
            <Stack>
              <Typography variant='h2'>
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
          >
            Plants
          </Stack>
        </Stack>
      </Navigation>
    </Stack>
  )
}
