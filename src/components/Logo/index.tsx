import { Stack, Typography } from '@mui/material'
import { convertPxToRem } from '../../utils'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  textColor?: string
}

export default function Logo({ size, textColor = 'accent1' }: LogoProps) {
  const sizes = {
    small: { logoSize: convertPxToRem(40), fontSize: convertPxToRem(22) },
    medium: { logoSize: convertPxToRem(70), fontSize: convertPxToRem(36) },
    large: { logoSize: convertPxToRem(90), fontSize: convertPxToRem(48) },
  }

  const { logoSize, fontSize } = sizes[size || 'medium']

  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      gap={2}
      sx={{ width: '100%' }}
    >
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
          color={textColor}
          sx={{
            fontWeight: 600,
            fontSize: fontSize,
            lineHeight: 1,
            letterSpacing: -2,
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
