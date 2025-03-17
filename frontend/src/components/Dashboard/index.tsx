import { Divider, Stack, Typography } from '@mui/material'
import { defaultFullscreenPageStyling } from '../../theme'
import Navigation from '../Navigation'
import PlantItem from '../PlantItem'
import StoreSelection from '../StoreSelection'
import { useState, useEffect } from 'react'
import { getPlants, Plant } from '../../utils/api'

export default function Dashboard() {
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    getPlants()
      .then((data) => setPlants(data))
      .catch((error) => console.error('Error fetching plants:', error))
  }, [])

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
          <Stack spacing={2}>
            {plants.map((plant) => (
              <PlantItem plant={plant} />
            ))}
          </Stack>
        </Stack>
      </Navigation>
    </Stack>
  )
}
