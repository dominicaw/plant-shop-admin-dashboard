import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import theme, { shadows } from '../../theme'
import { convertPxToRem } from '../../utils'
import { useState } from 'react'
import { Plant, updatePlant } from '../../utils/api'
import { useQueryClient } from '@tanstack/react-query'

interface PlantItemProps {
  plant: Plant
}

interface FormAlertProps {
  message: string
  type: 'error' | 'success'
}

function FormAlert({ message, type }: FormAlertProps) {
  return (
    <Stack
      sx={{
        backgroundColor:
          theme.palette[type === 'error' ? 'error' : 'accent2'].light,
        borderRadius: 2,
        padding: 1,
        border: `1px solid ${
          theme.palette[type === 'error' ? 'error' : 'accent2'].main
        }`,
      }}
    >
      <Typography color={type === 'error' ? 'error' : 'accent2'}>
        {message}
      </Typography>
    </Stack>
  )
}

export default function PlantItem({ plant }: PlantItemProps) {
  const [quantity, setQuantity] = useState<number>(plant.quantity || 0)
  const [price, setPrice] = useState<number>(plant.price || 0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const queryClient = useQueryClient()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await updatePlant(plant.id, { price, quantity })
      setSuccess('Plant updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['plants'] })
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: shadows.lightest,
      }}
    >
      <Accordion sx={{ justifyContent: 'space-between' }}>
        <AccordionSummary
          id='plant-panel-header'
          aria-controls='plant-panel-content'
          expandIcon={<ExpandMoreIcon color='primary' />}
        >
          <Stack gap={2} alignItems='center' flexDirection='row'>
            <Box
              sx={{
                height: convertPxToRem(50),
                width: convertPxToRem(50),
                borderRadius: '50%',
                overflow: 'hidden',
                border: `1px solid ${theme.palette.accent2.main}`,
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={`http://localhost:8000/${plant.image}`}
                alt='Ficus Lyrata'
              />
            </Box>
            <Stack>
              <Typography variant='body1' fontWeight={600}>
                {plant.name}
              </Typography>
              <Typography variant='body2'>
                <strong>Qty:</strong> {plant.quantity}
              </Typography>
              <Typography variant='body2'>
                <strong>Price:</strong> R{plant.price}
              </Typography>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={onSubmit}>
            <Stack spacing={2}>
              <TextField
                onChange={(e) => setQuantity(Number(e.target.value))}
                label='Quantity'
                type='number'
                variant='outlined'
                fullWidth
                margin='normal'
                size='small'
              />
              <TextField
                onChange={(e) => setPrice(Number(e.target.value))}
                label='Price'
                type='number'
                variant='outlined'
                fullWidth
                margin='normal'
                size='small'
              />

              <Button type='submit' variant='contained' size='small'>
                Update
              </Button>

              {error && <FormAlert message={error} type='error' />}
              {success && <FormAlert message={success} type='success' />}
            </Stack>
          </form>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
