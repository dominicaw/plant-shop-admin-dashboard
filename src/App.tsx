import './App.css'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { CssBaseline, Typography } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>Your content here</Typography>
    </ThemeProvider>
  )
}

export default App
