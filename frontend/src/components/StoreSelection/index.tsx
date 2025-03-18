import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material'
import { useState } from 'react'
import { Stores } from '../../utils/api'

export default function StoreSelection() {
  const [store, setStore] = useState('kloofSteet')

  function handleChange(event: SelectChangeEvent) {
    setStore(event.target.value)
  }

  return (
    <Stack sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id='store'>Store</InputLabel>
        <Select
          labelId='store'
          id='storeSelection'
          label='Store'
          onChange={handleChange}
          value={store}
        >
          <MenuItem value={Stores.KLOOF_STREET}>Kloof Street</MenuItem>
          <MenuItem value={Stores.MITCHELLS_PLAIN}>Mitchell's Plain</MenuItem>
          <MenuItem value={Stores.SOMERSET_WEST}>Somerset West</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}
