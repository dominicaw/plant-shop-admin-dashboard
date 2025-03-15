import { Stack, Box, Typography } from '@mui/material'
import theme from '../../theme'
import { convertPxToRem } from '../../utils'

export default function PlantItem() {
  return (
    <Stack
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={2}
      alignItems='center'
    >
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
        <Typography variant='body2'>Qty: 100</Typography>
        <Typography variant='body2'>Price: R99</Typography>
      </Stack>
    </Stack>
  )
}
