import { Button, Stack, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import theme, { shadows } from '../../theme'
import { addPlant } from '../../utils/api'
import FormAlert from '../FormAlert'
import { useNavigate } from 'react-router-dom'

export default function AddPlantForm() {
  const [name, setName] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] =
    useState<boolean>(false)

  function updateSubmitButtonDisabledState() {
    setIsSubmitButtonEnabled(Boolean(name && quantity > 0 && price > 0))
    setError(null)
  }

  useEffect(() => {
    updateSubmitButtonDisabledState()
  }, [name, quantity, price])

  const navigate = useNavigate()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccess(null)
    setError(null)

    try {
      await addPlant({ name, quantity, price })
      setSuccess('🎉 Plant added successfully!')
      setName('')
      setQuantity(0)
      setPrice(0)

      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (err) {
      setError('😔 Failed to add plant. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: shadows.lightest,
          p: 2,
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

        <Button
          type='submit'
          color='primary'
          variant='contained'
          size='small'
          disabled={!isSubmitButtonEnabled}
        >
          Add plant
        </Button>

        {error && <FormAlert message={error} type='error' />}
        {success && <FormAlert message={success} type='success' />}
      </Stack>
    </form>
  )
}
