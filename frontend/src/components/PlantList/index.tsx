import { Typography, Stack, Skeleton } from '@mui/material'
import { convertPxToRem } from '../../utils'
import PlantItem from '../PlantItem'
import useGetPlants from '../../hooks/useGetPlants'

export function PlantList() {
  const { data: plants, error, isLoading } = useGetPlants()
  return (
    <>
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
    </>
  )
}
