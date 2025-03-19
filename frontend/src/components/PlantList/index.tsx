import { Typography, Stack, Skeleton, Button } from '@mui/material'
import { convertPxToRem } from '../../utils'
import PlantItem from '../PlantItem'
import useGetPlants from '../../hooks/useGetPlants'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Role } from '../../utils/api'

export function PlantList() {
  const { data: plants, error, isLoading } = useGetPlants()
  const navigate = useNavigate()
  const { roles } = useAuth()

  function onAddPlantClick() {
    navigate('/add-plant')
  }

  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h3' component='h2'>
          Plants
        </Typography>
        {!roles.includes(Role.ASSISTANT) && (
          <Button
            variant='outlined'
            color='primary'
            size='small'
            onClick={onAddPlantClick}
          >
            Add plant
          </Button>
        )}
      </Stack>

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

      {error && (
        <Typography variant='body1' color='error'>
          Error fetching plants
        </Typography>
      )}

      {plants && plants.length > 0 && !error && !isLoading && (
        <Stack spacing={2}>
          {plants.map((plant) => (
            <PlantItem key={plant.id} plant={plant} />
          ))}
        </Stack>
      )}
    </>
  )
}
