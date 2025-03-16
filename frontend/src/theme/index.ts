import {
  createTheme,
  Shadows,
  SxProps,
  Theme,
  ThemeOptions,
} from '@mui/material/styles'
import { convertPxToRem } from '../utils'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    accent1: Palette['primary']
    accent2: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    accent1: PaletteOptions['primary']
    accent2: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    accent1: true
    accent2: true
  }
}

const fonts = {
  default: ['"Roboto"', '"Arial"', 'sans-serif'].join(','),
}

const shadowList: Shadows = [
  'none',
  'none',
  'none',
  '0 1px 2px rgba(0, 0, 0, 0.03), 0 3px 8px rgba(0, 0, 0, 0.04), 0 10px 20px rgba(0, 0, 0, 0.07)',
  'none',
  'none',
  '0 2px 3px 0 rgba(0, 0, 0, 0.03), 0 4px 10px 0 rgba(0, 0, 0, 0.04), 0 18px 47px 0 rgba(0, 0, 0, 0.07)',
  'none',
  'none',
  'none',
  'none',
  'none',
  '0 3px 2px 0 rgba(0, 0, 0, 0.02), 0 7px 5px 0 rgba(0, 0, 0, 0.03), 0 12px 10px 0 rgba(0, 0, 0, 0.04), 0 22px 18px 0 rgba(0, 0, 0, 0.04), 0 -2px 28px 0 rgba(0, 0, 0, 0.05)',
  'none',
  'none',
  'none',
  'none',
  'none',
  '0 3px 2px 0 rgba(0, 0, 0, 0.02), 0 7px 5px 0 rgba(0, 0, 0, 0.03), 0 12px 10px 0 rgba(0, 0, 0, 0.04), 0 22px 18px 0 rgba(0, 0, 0, 0.04), 0 42px 33px 0 rgba(0, 0, 0, 0.05), 0 100px 80px 0 rgba(0, 0, 0, 0.07)',
  'none',
  'none',
  'none',
  'none',
  'none',
  '0 3px 4px 0 rgba(0, 0, 0, 0.03), 0 7px 10px 0 rgba(0, 0, 0, 0.04), 0 13px 18px 0 rgba(0, 0, 0, 0.05), 0 22px 32px 0 rgba(0, 0, 0, 0.06), 0 42px 61px 0 rgba(0, 0, 0, 0.07), 0 100px 145px 0 rgba(0, 0, 0, 0.15)',
]

export const shadows = {
  none: 0,
  lightest: 3,
  light: 6,
  medium: 12,
  dark: 18,
  heavy: 24,
}

const baseButtonStyle = {
  borderRadius: 2,
  borderWidth: 2,
  fontSize: convertPxToRem(15),
  fontWeight: 700,
  lineHeight: 1.6,
  boxShadow: 'none',
  [`&:hover, &:active, &:focus, &:disabled`]: {
    borderWidth: 2,
  },
  [`&:focus`]: {
    outlineStyle: 'solid',
    outlineWidth: 2,
  },
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#3A7D44',
    },
    secondary: {
      main: '#D0DB97',
    },
    accent1: {
      main: '#69B578',
      light: '#c8e4cd',
      dark: '#499a58',
    },
    accent2: {
      main: '#47966f',
      light: '#bbdfcf',
      dark: '#254D32',
    },
    neutral: {
      main: '#9398a6',
      light: '#f4f9ff',
      dark: '#181d27',
    },
    text: {
      primary: '#181D27',
    },
  },
  typography: {
    fontFamily: fonts.default,
    h1: {
      fontSize: convertPxToRem(34),
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: convertPxToRem(24),
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: convertPxToRem(20),
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: convertPxToRem(15),
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: convertPxToRem(12),
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: convertPxToRem(10),
      fontWeight: 600,
      lineHeight: 1.2,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        sx: {
          borderRadius: baseButtonStyle.borderRadius,
          borderWidth: baseButtonStyle.borderWidth,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        size: 'medium',
        variant: 'contained',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...baseButtonStyle,
          borderRadius: 8,

          ...((ownerState.variant === 'contained' ||
            ownerState.variant === 'text') && {
            borderWidth: baseButtonStyle.borderWidth,
            borderColor: 'transparent',
            borderStyle: 'solid',
          }),

          ...(ownerState.size === 'small' && {
            padding: `${theme.spacing(0.75, 1)}`,
          }),

          ...(ownerState.size === 'medium' && {
            padding: `${theme.spacing(1.5, 2)}`,
          }),

          ...(ownerState.size === 'large' && {
            padding: `${theme.spacing(2.5, 2)} `,
          }),

          '&.Mui-disabled': {
            borderColor: 'transparent',
          },
        }),
      },
    },
  },
}

const theme = createTheme(themeOptions)

export const defaultFullscreenPageStyling = (
  color?: string
): SxProps<Theme> | undefined => ({
  minHeight: '100%',
  py: 3,
  '&::before': {
    background: color || theme.palette.neutral.light,
    content: "''",
    height: '100%',
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
})

shadowList.forEach((shadowValue: string, index: number) => {
  theme.shadows[index] = shadowValue
})

export default theme
