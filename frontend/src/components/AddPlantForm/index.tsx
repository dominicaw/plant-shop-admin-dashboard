import { Stack, TextField } from '@mui/material'
import { convertPxToRem } from '../../utils'
import { useState } from 'react'

export default function AddPlantForm() {
  const [name, setName] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: '100%',
        }}
      >
        <TextField
          label='Name'
          variant='outlined'
          type='text'
          fullWidth
          margin='normal'
          size='small'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label='Quantity'
          variant='outlined'
          type='text'
          fullWidth
          margin='normal'
          size='small'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <TextField
          label='Price'
          variant='outlined'
          type='text'
          fullWidth
          margin='normal'
          size='small'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </Stack>
    </form>
  )
}
