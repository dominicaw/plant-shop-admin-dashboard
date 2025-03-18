import { Divider, Skeleton, Stack, Typography } from '@mui/material'
import { defaultFullscreenPageStyling } from '../../theme'
import Navigation from '../Navigation'
import PlantItem from '../PlantItem'
import StoreSelection from '../StoreSelection'
import useGetPlants from '../../hooks/useGetPlants'
import { convertPxToRem } from '../../utils'

export default function Dashboard() {
  const { data: plants, error, isLoading } = useGetPlants()

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
          <Divider />

          <Typography variant='h3' component='h2'>
            Plants
          </Typography>

          {isLoading && !error && (
            <Stack spacing={2}>
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rectangular'
                  width='100%'
                  height={convertPxToRem(88)}
                  sx={{ borderRadius: 2 }}
                />
              ))}
            </Stack>
          )}
          {plants && plants.length > 0 && !error && !isLoading && (
            <Stack spacing={2}>
              {plants.map((plant) => (
                <PlantItem plant={plant} />
              ))}
            </Stack>
          )}
        </Stack>
      </Navigation>
    </Stack>
  )
}
