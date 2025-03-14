import { Stack, Typography } from '@mui/material'
import { convertPxToRem } from '../../utils'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
}

export default function Logo(size: LogoProps) {
  const sizes = {
    small: { logoSize: convertPxToRem(50), fontSize: convertPxToRem(24) },
    medium: { logoSize: convertPxToRem(70), fontSize: convertPxToRem(36) },
    large: { logoSize: convertPxToRem(90), fontSize: convertPxToRem(48) },
  }

  const { logoSize, fontSize } = sizes[size.size || 'medium']

  return (
    <Stack flexDirection='row' alignItems='center' gap={2}>
      <Stack sx={{ width: logoSize, height: 'auto' }}>
        <img
          src='/monstera.png'
          alt='Logo'
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Stack>
      <Stack>
        <Typography
          variant='h1'
          color='primary'
          sx={{
            fontWeight: 600,
            fontSize: fontSize,
            lineHeight: 1,
          }}
        >
          Club
          <br />
          Chlorophyll
        </Typography>
      </Stack>
    </Stack>
  )
}
