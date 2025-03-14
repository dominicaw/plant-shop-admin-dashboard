import { createTheme, ThemeOptions } from '@mui/material/styles'
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

export const defaultFullscreenPageStyling = {
  minHeight: '100%',
  py: 3,
  '&::before': {
    background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.neutral.light})`,
    content: "''",
    height: '100%',
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
}

console.log(theme.palette.neutral.light)

export default theme
