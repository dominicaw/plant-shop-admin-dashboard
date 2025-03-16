import { Stack, Box, Typography, IconButton } from '@mui/material'
import theme, { shadows } from '../../theme'
import { convertPxToRem } from '../../utils'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

export default function PlantItem() {
  function onEditClick() {
    console.log('Edit clicked')
  }
  return (
    <Stack
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        padding: 2,
        boxShadow: shadows.lightest,
      }}
    >
      <Stack flexDirection='row' gap={2} alignItems='center'>
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
      <Stack>
        <IconButton onClick={onEditClick} color='primary'>
          <EditOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
