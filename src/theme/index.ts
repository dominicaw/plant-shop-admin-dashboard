import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#3A7D44',
    },
    secondary: {
      main: '#69B578',
    },
    text: {
      primary: '#181D27',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    body1: {
      fontSize: '1rem',
      lineHeight: 1.2,
    },
  },
}

const theme = createTheme(themeOptions)

export default theme
