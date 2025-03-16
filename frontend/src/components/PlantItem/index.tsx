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

export default function PlantItem() {
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Price:', price)
    console.log('Quantity:', quantity)
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
                src='/Ficus-Lyrata.webp'
                alt='Ficus Lyrata'
              />
            </Box>
            <Stack>
              <Typography variant='body1' fontWeight={600}>
                Ficus Lyrata
              </Typography>
              <Typography variant='body2'>
                <strong>Qty:</strong> 100
              </Typography>
              <Typography variant='body2'>
                <strong>Price:</strong> R99
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
            </Stack>
          </form>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
